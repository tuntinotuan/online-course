import React from "react";

const Textarea = ({ className, placeholder, ...props }) => {
  return (
    <textarea
      className={`placeholder:text-primaryBlack placeholder:text-opacity-75 border border-primaryBlack p-4 ${className}`}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
};

export default Textarea;
