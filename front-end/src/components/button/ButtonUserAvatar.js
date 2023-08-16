import React from "react";
import { NavLink } from "react-router-dom";
import { SpecialCircle } from "../special";
import Image from "../image/Image";

const ButtonUserAvatar = ({
  className,
  shortName = "TN",
  avatar = false,
  cartHasCourse = false,
  size = 32,
  to = "",
}) => {
  return (
    <NavLink to={to}>
      <div
        className={`relative flex items-center justify-center text-white font-bold rounded-full ${
          avatar ? "" : "bg-primaryBlack"
        } ${className}`}
        style={{ width: size, height: size }}
      >
        {avatar ? (
          <Image url={avatar} className="rounded-full"></Image>
        ) : (
          shortName
        )}
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
