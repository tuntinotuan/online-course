import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ children, onClick }) => {
  const { setShow } = useDropdown();
  const handleClickOption = () => {
    setShow(false);
    onClick();
  };
  return (
    <div
      className="py-2 px-3 cursor-pointer flex items-center justify-between hover:bg-gray-100"
      onClick={handleClickOption}
    >
      {children}
    </div>
  );
};

export default Option;
