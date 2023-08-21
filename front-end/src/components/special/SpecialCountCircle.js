import React from "react";
import { useSelector } from "react-redux";

const SpecialCountCircle = ({ className }) => {
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  return (
    <span
      className={`w-6 h-6 flex items-center justify-center bg-purpleTextA4 text-white text-xs font-semibold rounded-full transition-all duration-1000 ${className} ${
        true ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      title={`${courses.length} item${
        courses.length > 1 ? "s" : ""
      } in the cart`}
    >
      {courses.length > 9 ? "9+" : courses.length}
    </span>
  );
};

export default SpecialCountCircle;
