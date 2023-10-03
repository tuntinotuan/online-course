import React from "react";

const IconPlus = ({ className, size = 24, onClick = () => {} }) => {
  return (
    <span className={`cursor-pointer ${className}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        style={{ width: size, height: size }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </span>
  );
};

export default IconPlus;
