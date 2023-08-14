import React from "react";

const SpecialCountCircle = ({ className, count = 2 }) => {
  return (
    <span
      className={`w-6 h-6 flex items-center justify-center bg-purpleTextA4 text-white text-xs font-semibold rounded-full transition-all duration-1000 ${className} ${
        true ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      title={`${count} item${count > 1 ? "s" : ""} in the cart`}
    >
      {count}
    </span>
  );
};

export default SpecialCountCircle;
