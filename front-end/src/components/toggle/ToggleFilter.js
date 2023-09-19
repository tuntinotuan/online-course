import React, { useState } from "react";
import { IconArrowDown } from "../icon";

const ToggleFilter = ({ initial = false, title, children }) => {
  const [toggle, setToggle] = useState(initial);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        className="w-full border border-transparent border-t-gray-300 dark:border-t-primaryBlack py-3 cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">
            {title || "Intro to Course and Python"}
          </h2>
          <IconArrowDown
            className={`${toggle ? "-rotate-180" : ""} transition-all`}
            size={15}
          ></IconArrowDown>
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 transition-all duration- ${
          toggle ? "mb-3" : "overflow-hidden opacity-0 invisible h-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default ToggleFilter;
