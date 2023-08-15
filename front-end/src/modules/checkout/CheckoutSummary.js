import React from "react";
import { Button } from "../../components/button";
import CoursePrice from "../../components/course/CoursePrice";
import CheckoutTitle from "./CheckoutTitle";

const CheckoutSummary = () => {
  return (
    <div className="sticky top-5 bg-grayF7 mt-24 pl-12">
      <CheckoutTitle className="mb-5">Summary</CheckoutTitle>
      <div className="flex items-center justify-between border border-transparent border-b-grayA6 border-opacity-25 pb-3">
        <span>Original Price:</span>
        <CoursePrice price="2,499,000" className="font-normal"></CoursePrice>
      </div>
      <div className="flex items-center justify-between text-base font-bold pt-3 mb-5">
        <span>Total:</span>
        <CoursePrice price="2,499,000"></CoursePrice>
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
