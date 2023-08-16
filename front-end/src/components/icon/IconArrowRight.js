import React from "react";

const IconArrowRight = ({
  className,
  onClick = () => {},
  size = 12,
  stroke = 1.5,
}) => {
  return (
    <span className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke="currentColor"
        style={{ width: size, height: size }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </span>
  );
};

export default IconArrowRight;
