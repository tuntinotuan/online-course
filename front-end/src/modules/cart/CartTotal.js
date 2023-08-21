import React from "react";
import Button from "../../components/button/Button";
import CoursePrice from "../../components/course/CoursePrice";
import { totalCoursePrice } from "../../utils/processing-number";

const CartTotal = ({ data }) => {
  return (
    <div className="flex-1">
      <div className="pb-4 border border-transparent border-b-gray-200">
        <div className="font-bold mb-2">
          <p className="text-base text-grayA6 mb-2">Total:</p>
          <CoursePrice
            price={totalCoursePrice(data).toLocaleString("en-US")}
            className="text-4xl"
          ></CoursePrice>
        </div>
        <Button
          className="bg-purpleTextA4 py-3 text-white text-base font-bold"
          borderNone
          full
          to="checkout"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotal;
