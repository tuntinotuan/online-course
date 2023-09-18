import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest, requestCreateOrder } from "./orderRequests";
import {
  requestCreatePurchasedCourses,
  requestUpdatePurchasedCourses,
} from "../purchased/purchasedRequests";
import { toast } from "react-toastify";
import { totalCoursePrice } from "../../utils/processing-number";
import { requestRemoveNumerousItemsFromCart } from "../cart/cartRequests";

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

export const handlePaymentWithCheckout = createAsyncThunk(
  "order/handlePaymentWithCheckout",
  async (courses, { dispatch, getState }) => {
    let getFullIdCourses = [];
    const state = getState();
    const { currentUserId } = state.auth;
    const { userData } = state.user;
    try {
      const stripe = await stripePromise;
      const response = await makePaymentRequest.post(
        `/custom/payment-with-checkout`,
        {
          courses: courses,
          userId: currentUserId,
        }
      );
      const stripeId = response.data.stripeSession.id;
      await courses.map((item) => {
        getFullIdCourses.push({ id: item.id });
        return getFullIdCourses;
      });
      await requestCreateOrder(courses, stripeId, currentUserId);
      !userData?.purchased_course?.id
        ? await requestCreatePurchasedCourses(currentUserId, getFullIdCourses)
        : await requestUpdatePurchasedCourses(
            userData?.purchased_course?.id,
            getFullIdCourses
          );
      // Remove items from Cart
      await requestRemoveNumerousItemsFromCart(
        userData?.cart?.id,
        getFullIdCourses
      );
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const handlePaymentWithElement = createAsyncThunk(
  "order/handlePaymentWithElement",
  async (query, { dispatch, getState }) => {
    let getFullIdCourses = [];
    const { navigate, stripeElement, elements, courses, cardNumberElement } =
      query;
    const state = getState();
    const { currentUserId } = state.auth;
    const { userData } = state.user;
    const totalAmount = totalCoursePrice(courses);
    try {
      if (!stripeElement || !elements) return;
      const { data } = await makePaymentRequest.post(
        `/custom/payment-with-element`,
        {
          amount: totalAmount,
        }
      );
      const client_secret = data.client_secret;

      const result = await stripeElement.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: userData.userName,
            email: userData.email,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("succeeded payment");
          await courses.map((item) => {
            getFullIdCourses.push({ id: item.id });
            return getFullIdCourses;
          });
          await requestCreateOrder(
            courses,
            result.paymentIntent.id,
            currentUserId
          );
          // Add purchased courses
          !userData?.purchased_course?.id
            ? await requestCreatePurchasedCourses(
                currentUserId,
                getFullIdCourses
              )
            : await requestUpdatePurchasedCourses(
                userData?.purchased_course?.id,
                getFullIdCourses
              );
          // Remove items from Cart
          await requestRemoveNumerousItemsFromCart(
            userData?.cart?.id,
            getFullIdCourses
          );
          toast.success("Succeed payment!");
          navigate("/my-course/learning");
        } else {
          toast.error("There's some issue while processing payment ");
          console.log("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  }
);
