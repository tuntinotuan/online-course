import React from "react";
import { NavLink, useParams } from "react-router-dom";

const InstructorManageSidebar = () => {
  const { courseId } = useParams();
  const pathCommon = `/instructor/course/${courseId}/manage/`;
  const navItems = [
    {
      title: "Course landing page",
      path: `${pathCommon}basics`,
    },
    {
      title: "Curriculum",
      path: `${pathCommon}curriculum`,
    },
    {
      title: "Pricing",
      path: `${pathCommon}pricing`,
    },
  ];
  return (
    <div className="w-[250px]">
      <h2 className="text-base font-bold px-8">Create your content</h2>
      {navItems.map((item) => (
        <NavLink
          to={item.path}
          className="flex items-center gap-2 w-full text-base hover:bg-grayF7 py-2 px-8"
          style={({ isActive }) =>
            isActive
              ? { borderLeft: "5px solid black" }
              : { borderLeft: "5px solid transparent" }
          }
        >
          <div className="w-5 h-5 rounded-full border border-primaryBlack"></div>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default InstructorManageSidebar;
