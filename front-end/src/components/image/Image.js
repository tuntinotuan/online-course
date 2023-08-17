import React from "react";

const Image = ({ className, url = "", isOverlay = false }) => {
  return (
    <div className="relative w-full h-full">
      <img
        srcSet={url}
        alt=""
        className={`w-full h-full object-cover border border-gray-200 ${className}`}
      />
      <div
        className={`absolute top-0 w-full h-full transition-all bg-primaryBlack bg-opacity-25 ${
          isOverlay ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default Image;
