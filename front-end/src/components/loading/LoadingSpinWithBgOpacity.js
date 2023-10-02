import React from "react";
import LoadingSpinQuarter from "./LoadingSpinQuarter";

const LoadingSpinWithBgOpacity = () => {
  return (
    <div
      className="absolute top-0 left-0 flex items-start justify-center w-full bg-white bg-opacity-60 mx-auto py-40 z-10"
      style={{ height: document.body.offsetHeight }}
    >
      <LoadingSpinQuarter></LoadingSpinQuarter>
    </div>
  );
};

export default LoadingSpinWithBgOpacity;
