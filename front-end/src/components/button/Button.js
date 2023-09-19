import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  onClick,
  className = "",
  full = false,
  mtAuto = false,
  square = false,
  borderNone = false,
  type = "button",
  children = "This is button tag",
  to = "",
  ...props
}) => {
  if (to)
    return (
      <Link to={to} className={full ? "w-full" : ""}>
        <button
          type={type}
          onClick={onClick}
          className={`${square ? square : "py-2 px-3"} ${
            borderNone ? "" : "border border-primaryBlack"
          } ${mtAuto ? "mt-auto" : ""} ${full ? "w-full" : ""} ${className} ${
            borderNone
              ? "hover:opacity-80"
              : "hover:bg-[#F5F5F5] dark:hover:bg-transparent dark:hover:opacity-80"
          } transition-all disabled:cursor-wait disabled:opacity-25`}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${square ? square : "py-2 px-3"} ${
        borderNone ? "" : "border border-primaryBlack"
      } ${mtAuto ? "mt-auto" : ""} ${full ? "w-full" : ""} ${className} ${
        borderNone
          ? "hover:opacity-80"
          : "hover:bg-grayF7 dark:hover:bg-transparent dark:hover:opacity-80"
      } transition-all disabled:cursor-wait disabled:opacity-60`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
