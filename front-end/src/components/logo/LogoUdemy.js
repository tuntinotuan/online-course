import React from "react";
import { NavLink } from "react-router-dom";

const LogoUdemy = ({ to = "/" }) => {
  return (
    <NavLink to={to}>
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt=""
        className="w-[90px] h-[70px] cursor-pointer"
      />
    </NavLink>
  );
};

export default LogoUdemy;
