import React from "react";

const SpecialArrow = ({ coords }) => {
  return (
    <>
      <div
        className={`bg-front-arrow absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white clip-custom ${
          coords?.x > window.innerWidth / 2
            ? "-right-4 rotate-90"
            : "-left-4 -rotate-90"
        }`}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div
        className={`bg-back-arrow absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 clip-custom -z-10 ${
          coords?.x > window.innerWidth / 2
            ? "-right-[18px] rotate-90"
            : "-left-[18px] -rotate-90"
        }`}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div
        className={`bg-overlay-arrow absolute top-1/2 -translate-y-1/2 w-4 h-8 bg-white ${
          coords?.x > window.innerWidth / 2 ? "-right-0" : "-left-0 "
        }`}
      ></div>
    </>
  );
};

export default SpecialArrow;
