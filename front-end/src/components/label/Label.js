import React from "react";

const Label = ({ htmlFor = "", className, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-base font-bold select-none ${
        htmlFor ? "cursor-pointer" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
