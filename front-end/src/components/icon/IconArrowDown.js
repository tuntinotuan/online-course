import React from "react";

const IconArrowDown = ({
  className,
  size = 24,
  onClick = () => {},
  stroke = 2.5,
}) => {
  return (
    <span className={`cursor-pointer ${className}`} onClick={onClick}>
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
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </span>
  );
};

export default IconArrowDown;
