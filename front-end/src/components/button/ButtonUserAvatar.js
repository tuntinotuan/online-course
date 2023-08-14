import React from "react";
import { NavLink } from "react-router-dom";
import { SpecialCircle } from "../special";

const ButtonUserAvatar = ({
  className,
  shortName = "TN",
  to = "",
  cartHasCourse = false,
  size = 32,
}) => {
  return (
    <NavLink to={to}>
      <div
        className={`relative flex items-center justify-center bg-primaryBlack text-white font-bold rounded-full p-1 ${className}`}
        style={{ width: size, height: size }}
      >
        {shortName}
        {cartHasCourse && (
          <SpecialCircle
            className="absolute top-0 right-0 text-purpleTextA4"
            size={12}
          ></SpecialCircle>
        )}
      </div>
    </NavLink>
  );
};

export default ButtonUserAvatar;
