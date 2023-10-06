import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({
  children,
  className,
  onClick,
  offClick = false,
  active = false,
}) => {
  const { setShow } = useDropdown();
  const handleClickOption = (e) => {
    !offClick && setShow(false);
    onClick();
  };
  return (
    <div
      className={`py-2 px-3 flex items-center justify-between hover:bg-gray-100 ${className} ${
        active ? "font-bold text-purpleTextA4" : ""
      } ${offClick ? "" : "cursor-pointer"}`}
      onClick={handleClickOption}
    >
      {children}
    </div>
  );
};

export default Option;
