import React from "react";

const LoadingSpinQuarter = ({
  className,
  size = 80,
  borderSize = "border-[12px]",
  borderColor = "border-primaryBlack",
}) => {
  return (
    <div
      className={`mx-auto border-t-transparent rounded-full animate-spin ${borderSize} ${borderColor} ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
};

export default LoadingSpinQuarter;
