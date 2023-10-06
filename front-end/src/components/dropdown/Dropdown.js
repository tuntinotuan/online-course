import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";
import { IconArrowDown } from "../icon";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  childrenClass,
  initialShow = false,
  ...props
}) => {
  const [show, setShow] = useState(initialShow);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  let statusClassForPlaceholder = "";
  switch (placeholder) {
    case "draft":
      statusClassForPlaceholder = "text-grayA6 font-bold";
      break;
    case "public":
      statusClassForPlaceholder = "text-green-500 font-bold";
      break;
    case "reject":
      statusClassForPlaceholder = "text-red-500 font-bold";
      break;
    default:
      break;
  }
  return (
    <DropdownProvider setShow={setShow} {...props}>
      <div className="relative inline-block w-full">
        <div
          className="flex items-center justify-between py-2 px-3 bg-white border border-gray-300 cursor-pointer font-medium"
          onClick={handleToggleDropdown}
        >
          <span className={`capitalize ${statusClassForPlaceholder}`}>
            {placeholder}
          </span>
          <IconArrowDown
            className={`${
              show ? "-rotate-180" : ""
            } transition-all duration-300`}
            size={15}
          ></IconArrowDown>
        </div>
        {show && (
          <div
            className={`absolute top-full left-0 w-full h-auto max-h-[150px] bg-white shadow-md overflow-auto z-10 ${childrenClass}`}
          >
            {children}
          </div>
        )}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
