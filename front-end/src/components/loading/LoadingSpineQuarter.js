import React from "react";

const LoadingSpineQuarter = ({ className }) => {
  return (
    <div
      className={`w-20 h-20 mx-auto border-[12px] border-primaryBlack border-t-transparent rounded-full animate-spin ${className}`}
    ></div>
  );
};

export default LoadingSpineQuarter;
