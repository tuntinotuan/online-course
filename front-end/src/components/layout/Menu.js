import React from "react";
import { NavLink } from "react-router-dom";

const menuList = [
  { title: "Python", path: "/" },
  { title: "Excel", path: "/excel" },
  { title: "Web Development", path: "/web-development" },
  { title: "JavaScript", path: "/javascript" },
  { title: "Data Science", path: "/data-science" },
  { title: "Amazon AWS", path: "/amazon-aws" },
  { title: "Drawing", path: "/drawing" },
];

const Menu = () => {
  const commonCss =
    "py-4 font-bold transition-all hover:text-primaryBlack cursor-pointer";
  return (
    <header className="header flex items-center gap-5 text-base">
      {menuList.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-primaryBlack ${commonCss}`
              : `text-grayA6 ${commonCss}`
          }
          to={item.path}
          key={item.title}
        >
          {item.title}
        </NavLink>
      ))}
    </header>
  );
};

export default Menu;
