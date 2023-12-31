import React from "react";
import RadioCustom from "./RadioCustom";

const RadioPaymentSelect = ({ className, id, on, children }) => {
  return (
    <label
      className={`flex items-center gap-2 w-full bg-grayF7 dark:bg-darkMain border border-gray-300 dark:border-primaryBlack p-2 cursor-pointer 
      ${className}`}
      htmlFor={id}
    >
      <RadioCustom on={on}></RadioCustom>
      {children}
    </label>
  );
};

export default RadioPaymentSelect;
