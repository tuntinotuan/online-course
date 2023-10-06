import React from "react";
import { NavLink } from "react-router-dom";
import { SpecialCircle } from "../special";
import Image from "../image/Image";
import { convertUsernameShortly } from "../../utils/processing-string";
import { useSelector } from "react-redux";

const ButtonUserAvatar = ({
  className,
  shortName = "TN",
  avatar = false,
  cartHasCourse = false,
  size = 32,
  to = "",
  ...props
}) => {
  const { userData } = useSelector((state) => state.user);
  const { role } = userData;
  const renderElement = () => (
    <div
      className={`relative flex items-center justify-center text-white font-bold rounded-full ${
        avatar ? "" : "bg-primaryBlack"
      } ${className}`}
      style={{ width: size, height: size, fontSize: (size * 2) / 5 }}
      {...props}
    >
      {avatar && (role?.type === "admin" || role?.type === "moderator") && (
        <div
          className={`absolute -top-[1px] -left-[1px] bg-gradient-to-r rounded-full animate-spin ${
            role?.type === "admin"
              ? "from-green-500 to-cyan-500"
              : "from-purple-500 to-pink-500"
          }`}
          style={{ width: size + 2, height: size + 2 }}
        ></div>
      )}
      {avatar ? (
        <Image
          url={avatar}
          className="rounded-full"
          borderNone={role?.type === "admin" || role?.type === "moderator"}
        ></Image>
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
