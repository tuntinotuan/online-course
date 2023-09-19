import React from "react";

const SpecialArrow = ({ coords, coordinateMiddle = false }) => {
  return (
    <>
      <div
        className={`bg-front-arrow absolute w-8 h-8 bg-white dark:bg-darkMain clip-custom ${
          coordinateMiddle
            ? coords?.y > window.innerHeight / 2
              ? "-bottom-4 rotate-180"
              : "-top-4"
            : coords?.x > window.innerWidth / 2
            ? "-right-4 rotate-90"
            : "-left-4 -rotate-90"
        } ${
          coordinateMiddle
            ? "left-1/2 -translate-x-1/2"
            : "top-1/2 -translate-y-1/2"
        }`}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div
        className={`bg-back-arrow absolute w-8 h-8 bg-gray-300 dark:bg-primaryBlack clip-custom -z-10 ${
          coordinateMiddle
            ? coords?.y > window.innerHeight / 2
              ? "-bottom-[18px] rotate-180"
              : "-top-[18px]"
            : coords?.x > window.innerWidth / 2
            ? "-right-[18px] rotate-90"
            : "-left-[18px] -rotate-90"
        } ${
          coordinateMiddle
            ? "left-1/2 -translate-x-1/2"
            : "top-1/2 -translate-y-1/2"
        }`}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div
        className={`bg-overlay-arrow absolute w-4 h-8 bg-white dark:bg-darkMain ${
          coordinateMiddle
            ? coords?.y > window.innerHeight / 2
              ? "bottom-0 w-8 !h-6"
              : "top-0 w-8 !h-6"
            : coords?.x > window.innerWidth / 2
            ? "-right-0"
            : "-left-0 "
        } ${
          coordinateMiddle
            ? "left-1/2 -translate-x-1/2"
            : "top-1/2 -translate-y-1/2"
        }`}
      ></div>
    </>
  );
};

export default SpecialArrow;
