import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "./orderRequests";
import {
  requestCreatePurchasedCourses,
  requestUpdatePurchasedCourses,
} from "../purchased/purchasedRequests";

const stripePromise = loadStripe(
  "pk_test_51MwSqkEqTHVX4ukZmvtphvtHggeYSSNWklI1cgHc010ZyWPC6Esr5fFt8DNMHHxJ4kLh9tGfH6oz8mDFsO6GwACJ00AMfFHWuv"
);

export const handlePayment = createAsyncThunk(
  "order/hanlePayment",
  async (courses, { dispatch, getState }) => {
    let getFullIdCourses = [];
    const state = getState();
    const { currentUserId } = state.auth;
    const { userData } = state.user;
    try {
      const stripe = await stripePromise;
      const response = await makePaymentRequest.post(`/orders`, {
        courses: courses,
        userId: currentUserId,
      });
      await courses.map((item) => {
        getFullIdCourses.push({ id: item.id });
        return getFullIdCourses;
      });
      !userData?.purchased_course?.id
        ? await requestCreatePurchasedCourses(currentUserId, getFullIdCourses)
        : await requestUpdatePurchasedCourses(
            userData?.purchased_course?.id,
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
