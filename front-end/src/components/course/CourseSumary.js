import React from "react";
import CourseSumaryItems from "./CourseSumaryItems";

const defaultObj = [
  {
    value: 66,
    title: "total hours",
  },
  {
    value: 300,
    title: "lectures",
  },
  {
    title: "All Level",
  },
];

const CourseSumary = ({ className, obj = defaultObj }) => {
  return (
    <div className={`flex items-center gap-2 text-xs opacity-80 ${className}`}>
      {obj.map((item, index) => (
        <CourseSumaryItems hidden={index === 0} key={item.title}>
          {item.value} {item.title}
        </CourseSumaryItems>
      ))}
    </div>
  );
};

export default CourseSumary;
