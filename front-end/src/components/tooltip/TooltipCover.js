import React from "react";

const TooltipCover = ({ className, hovered, children }) => {
  return (
    <div
      className={`absolute top-[112%] -right-1/2 bg-white w-[290px] transition-all border border-t-transparent border-gray-300 shadow-md z-10 ${className} ${
        hovered
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-95"
      }`}
    >
      {children}
      <div className="cover-space absolute bottom-full right-0 w-full h-5 bg-transparent"></div>
    </div>
  );
};

export default TooltipCover;