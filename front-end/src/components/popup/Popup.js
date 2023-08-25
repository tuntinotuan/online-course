import React from "react";
import { IconClose } from "../icon";

const Popup = ({ children, show, onClick = () => {} }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all z-50 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute w-full h-full bg-primaryBlack bg-opacity-60"
        onClick={onClick}
      ></div>
      <div
        className={`relative w-[406px] bg-white p-6 transition-all ${
          show
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-75"
        }`}
      >
        <IconClose
          className="absolute top-4 right-4 p-2 cursor-pointer"
          onClick={onClick}
        ></IconClose>
        {children}
      </div>
    </div>
  );
};

export default Popup;
