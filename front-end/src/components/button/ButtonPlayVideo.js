import React from "react";
import { IconPlay } from "../icon";

const ButtonPlayVideo = ({ size = 36 }) => {
  return (
    <div
      className="flex items-center justify-center bg-white text-primaryBlack rounded-full mb-5 z-10"
      style={{ width: (size - 4) * 2, height: (size - 4) * 2 }}
    >
      <IconPlay size={size}></IconPlay>
    </div>
  );
};

export default ButtonPlayVideo;
