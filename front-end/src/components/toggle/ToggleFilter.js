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
        className="w-full border border-transparent border-t-gray-300 py-3 cursor-pointer"
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
      {toggle && <div className="flex flex-col gap-4 mb-3">{children}</div>}
    </>
  );
};

export default ToggleFilter;
