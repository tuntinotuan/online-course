import React from "react";

const SpecialCircle = ({ className, size = 6 }) => {
  return (
    <div
      className={`bg-current rounded-full ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
};

export default SpecialCircle;
