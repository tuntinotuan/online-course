import React from "react";
import { NavLink } from "react-router-dom";

const listNav = [
  {
    title: "All courses",
    path: "learning",
  },
  {
    title: "My lists",
    path: "lists",
  },
  {
    title: "Wishlist",
    path: "wishlist",
  },
  {
    title: "Archived",
    path: "archived",
  },
  {
    title: "Learning tools",
    path: "learning-tools",
  },
];

const NavigateMyCourses = () => {
  const commonCss =
    "relative text-base font-bold hover:text-white transition-all pb-2";
  return (
    <nav className="flex items-center gap-5 text-purpleTextDC">
      {listNav.map((item) => (
        <NavLink
          to={item.path}
          key={item.title}
          className={({ isActive }) =>
            isActive ? `nav-my-course text-white ${commonCss}` : `${commonCss}`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigateMyCourses;
