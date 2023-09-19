import React from "react";
import Button from "../../components/button/Button";
import CoursePrice from "../../components/course/CoursePrice";
import {
  totalCourseOriginnalPrice,
  totalCoursePrice,
} from "../../utils/processing-number";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowPopupSignUp } from "../../redux-toolkit/globalSlice";

const CartTotal = ({ data }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.auth);
  const total = totalCoursePrice(data);
  const originalTotal = totalCourseOriginnalPrice(data || []);
  const discount = originalTotal - total;
  const discountOnPercentage = (discount / originalTotal) * 100;
  return (
    <div className="flex-1">
      <div className="pb-4 border border-transparent border-b-gray-200 dark:border-b-primaryBlack">
        <div className="font-bold mb-2">
          <p className="text-base text-grayA6 dark:text-darkTextCB mb-2">
            Total:
          </p>
          <CoursePrice
            price={total.toLocaleString("en-US")}
            className="text-4xl"
          ></CoursePrice>
          {discount > 0 && (
            <CoursePrice
              price={originalTotal.toLocaleString("en-US")}
              className="text-base font-normal text-grayA6 line-through"
            ></CoursePrice>
          )}
          {discount > 0 && (
            <span className="text-base font-normal">
              {discountOnPercentage.toFixed()}% off
            </span>
          )}
        </div>
        <Button
          className="bg-purpleTextA4 py-3 text-white text-base font-bold"
          borderNone
          full
          onClick={() => (!jwt ? dispatch(toggleShowPopupSignUp(true)) : {})}
          to={jwt ? "checkout" : false}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotal;
