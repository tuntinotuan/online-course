import React from "react";
import { NavLink } from "react-router-dom";

const LogoUdemyDark = ({ className, to = "/" }) => {
  return (
    <NavLink to={to} className="flex-shrink-0">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        alt=""
        className={`w-[90px] py-4 cursor-pointer ${className}`}
      />
    </NavLink>
  );
};

export default LogoUdemyDark;
