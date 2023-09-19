import React from "react";

const Image = ({
  className,
  url = "",
  borderNone = false,
  isOverlay = false,
  bgOpacity = "bg-opacity-25",
  children,
}) => {
  return (
    <div className="relative w-full h-full">
      <img
        srcSet={url}
        alt=""
        className={`w-full h-full object-cover ${
          borderNone ? "" : "border border-gray-200 dark:border-primaryBlack"
        } ${className}`}
      />
      <div
        className={`absolute top-0 w-full h-full transition-all bg-primaryBlack ${bgOpacity} ${
          isOverlay ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-linear ${
          isOverlay
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-90"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Image;
