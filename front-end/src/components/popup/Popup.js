import React, { useEffect } from "react";
import { IconClose } from "../icon";

const Popup = ({
  classPopup,
  className,
  children,
  show,
  onClick = () => {},
}) => {
  useEffect(() => {
    const popup = document.querySelector("#popup");
    popup.scrollIntoView({ behavior: "smooth", block: "start" });
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return (
    <>
      <div
        className={`over-lay fixed inset-0 w-full h-full bg-primaryBlack bg-opacity-60 cursor-pointer z-50 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center transition-all z-50 overflow-y-auto ${classPopup} ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        id="popup"
      >
        <div
          className={`absolute flex-shrink-0 top-0 w-full h-full cursor-pointer`}
          onClick={onClick}
        ></div>
        <div
          className={`relative w-[406px] bg-white p-6 transition-all ${className}  ${
            show
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-75"
          }`}
          // style={{
          //   transform: `translateY(${-window.innerHeight}px)`,
          // }}
        >
          <IconClose
            className="absolute top-4 right-4 p-2 cursor-pointer"
            onClick={onClick}
          ></IconClose>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
