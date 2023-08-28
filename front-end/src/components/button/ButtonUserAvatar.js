import React from "react";
import { NavLink } from "react-router-dom";
import { SpecialCircle } from "../special";
import Image from "../image/Image";
import { convertUsernameShortly } from "../../utils/processing-string";

const ButtonUserAvatar = ({
  className,
  shortName = "TN",
  avatar = false,
  cartHasCourse = false,
  size = 32,
  to = "",
}) => {
  const renderElement = () => (
    <div
      className={`relative flex items-center justify-center text-white font-bold rounded-full ${
        avatar ? "" : "bg-primaryBlack"
      } ${className}`}
      style={{ width: size, height: size, fontSize: (size * 2) / 5 }}
    >
      {avatar ? (
        <Image url={avatar} className="rounded-full"></Image>
      ) : (
        convertUsernameShortly(shortName)
      )}
      {cartHasCourse && (
        <SpecialCircle
          className="absolute top-0 right-0 text-purpleTextA4"
          size={12}
        ></SpecialCircle>
      )}
    </div>
  );
  if (to) return <NavLink to={to}>{renderElement}</NavLink>;
  return renderElement();
};

export default ButtonUserAvatar;
