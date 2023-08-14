import React from "react";
import IconHeart from "../icon/IconHeart";

const ButtonHeart = ({ className }) => {
  return (
    <button
      className={`border border-primaryBlack rounded-full p-3 ${className} group`}
    >
      <IconHeart></IconHeart>
    </button>
  );
};

export default ButtonHeart;
