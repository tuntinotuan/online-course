import React from "react";
import { NavLink, useParams } from "react-router-dom";

const menuList = [
  { title: "React JS", path: "/topics/React JS" },
  { title: "Unity", path: "/topics/Unity" },
  { title: "JavaScript", path: "/topics/JavaScript" },
  { title: "Web Development", path: "/topics/Web Development" },
  { title: "Data Science", path: "/topics/Data Science" },
  { title: "Amazon AWS", path: "/topics/amazon-aws" },
  { title: "Excel", path: "/topics/excel" },
  { title: "Drawing", path: "/topics/drawing" },
];

const Menu = () => {
  const { topicName } = useParams();

  const commonCss =
    "py-4 font-bold transition-all hover:text-primaryBlack dark:hover:text-white cursor-pointer";
  return (
    <header className="header flex items-center gap-5 text-base">
      {menuList.map((item, index) => (
        <NavLink
          className={({ isActive }) =>
            isActive || (!topicName && index === 0)
              ? `text-primaryBlack dark:text-white ${commonCss}`
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
