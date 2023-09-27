import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";
import { IconArrowDown } from "../icon";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <DropdownProvider setShow={setShow} {...props}>
      <div className="relative inline-block w-full">
        <div
          className="flex items-center justify-between py-2 px-3 bg-[#E7ECF3] rounded cursor-pointer font-medium"
          onClick={handleToggleDropdown}
        >
          <span>{placeholder}</span>
          <span>
            <IconArrowDown
              className={`${show ? "-rotate-180" : ""} transition-all`}
              size={15}
            ></IconArrowDown>
          </span>
        </div>
        {show && (
          <div className="absolute top-full left-0 w-full h-[150px] bg-white shadow-md overflow-auto z-10">
            {children}
          </div>
        )}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
