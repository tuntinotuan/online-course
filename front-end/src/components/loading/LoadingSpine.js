import React from "react";

const LoadingSpine = ({
  className,
  size = "40px",
  borderSize = "5px",
  borderColor = "white",
}) => {
  return (
    <div
      className={`animate-spin rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        border: `${borderSize} solid ${borderColor}`,
        borderTop: `${borderSize} solid transparent`,
        borderBottom: `${borderSize} solid transparent`,
      }}
    ></div>
  );
};

export default LoadingSpine;
