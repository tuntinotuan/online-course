import React from "react";
import { NavLink } from "react-router-dom";

const menuList = [
  { title: "Unity", path: "/" },
  { title: "React JS", path: "/topics/React JS" },
  { title: "JavaScript", path: "/topics/JavaScript" },
  { title: "Web Development", path: "/topics/Web Development" },
  { title: "Data Science", path: "/topics/Data Science" },
  { title: "Amazon AWS", path: "/topics/amazon-aws" },
  { title: "Excel", path: "/topics/excel" },
  { title: "Drawing", path: "/topics/drawing" },
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
