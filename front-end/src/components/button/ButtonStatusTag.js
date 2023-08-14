import React from "react";

const ButtonStatusTag = ({ className, children }) => {
  return (
    <button
      className={`text-xs text-primaryBlack font-semibold py-1 px-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonStatusTag;
