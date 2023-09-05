import React from "react";
import { Button } from "../../components/button";
import CoursePrice from "../../components/course/CoursePrice";
import CheckoutTitle from "./CheckoutTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  totalCourseOriginnalPrice,
  totalCoursePrice,
} from "../../utils/processing-number";
import { handlePayment } from "../../redux-toolkit/order/orderHandlerThunk";

const CheckoutSummary = () => {
  const dispatch = useDispatch();
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;

  const handleCheckout = async () => {
    dispatch(handlePayment(courses));
    // try {
    //   const stripe = await stripePromise;
    //   const response = await makePaymentRequest.post("/orders", {
    //     courses: courses,
    //   });
    //   console.log("response", response);
    //   await stripe.redirectToCheckout({
    //     sessionId: response.data.stripeSession.id,
    //   });
    // } catch (err) {
    //   console.log("err", err);
    // }
  };
  return (
    <div className="sticky top-5 bg-grayF7 mt-24 pl-12">
      <CheckoutTitle className="mb-5">Summary</CheckoutTitle>
      <div className="flex flex-col gap-2 border border-transparent border-b-grayA6 border-opacity-25 pb-3">
        <div className="flex items justify-between">
          <span>Original Price:</span>
          <CoursePrice
            price={totalCourseOriginnalPrice(courses || []).toLocaleString(
              "en-US"
            )}
            className="font-normal"
          ></CoursePrice>
        </div>
        {totalCourseOriginnalPrice(courses || []) -
          totalCoursePrice(courses || []) >
          0 && (
          <div className="flex items justify-between">
            <span>Discounts:</span>
            <span className="flex items-center gap-1">
              {"-"}
              <CoursePrice
                price={(
                  totalCourseOriginnalPrice(courses || []) -
                  totalCoursePrice(courses || [])
                ).toLocaleString("en-US")}
                className="font-normal"
              ></CoursePrice>
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between text-base font-bold pt-3 mb-5">
        <span>Total:</span>
        <CoursePrice
          price={totalCoursePrice(courses || []).toLocaleString("en-US")}
        ></CoursePrice>
      </div>
      <span className="text-xs text-grayA6">
        By completing your purchase you agree to these
        <span className="text-purpleText56 ml-1">Terms of Service</span>
      </span>
      <Button
        className="bg-purpleTextA4 text-white text-base font-bold py-4 my-3"
        borderNone
        full
        to=""
        onClick={handleCheckout}
      >
        Complete Checkout
      </Button>
      <span className="block text-center text-xs text-grayA6">
        30-Day Money-Back Guarantee
      </span>
    </div>
  );
};

export default CheckoutSummary;
