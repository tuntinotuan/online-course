import React from "react";
import { NavLink } from "react-router-dom";
const listNav = [
  {
    title: "Students",
    path: "/instructor/performance/students",
  },
  {
    title: "Overview",
    path: "/instructor/performance/overview",
  },
];
const InstructorPerformanceSidebar = () => {
  const commonCss = "block w-full text-base py-2 px-8";
  return (
    <div className="absolute top-0 flex h-full bg-grayF7">
      <div className="sticky h-80 top-0 w-[230px] py-8">
        {listNav.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${commonCss} font-bold` : commonCss
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default InstructorPerformanceSidebar;
