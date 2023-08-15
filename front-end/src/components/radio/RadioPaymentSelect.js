import React from "react";

const RadioPaymentSelect = ({ className, id, on, children }) => {
  return (
    <label
      className={`flex items-center gap-2 w-full bg-grayF7 border border-gray-300 p-2 cursor-pointer 
      ${className}`}
      htmlFor={id}
    >
      <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-primaryBlack">
        <div
          className={`w-[8px] h-[8px] bg-primaryBlack rounded-full transition-all ${
            on ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
      </div>
      {children}
    </label>
  );
};

export default RadioPaymentSelect;
