import React, { useEffect, useState } from "react";
import { IconArrowDown } from "../../components/icon";
import CourseContentItem from "./CourseContentItem";

const CourseContentList = ({ toggleAll }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    toggleAll ? setToggle(true) : setToggle(false);
  }, [toggleAll]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="border border-slate-200 border-b-transparent">
      <div
        className="flex items-center justify-between w-full bg-slate-100 border border-transparent border-b-slate-200 py-3 px-5 cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-4">
          <IconArrowDown
            className={`${toggle ? "-rotate-180" : ""} transition-all`}
            size={16}
          ></IconArrowDown>
          <h2 className="text-[15px] font-bold">Intro to Course and Python</h2>
        </div>
        <span className="text-[13px] text-slate-600">2 lectures • 7 min</span>
      </div>
      {toggle && (
        <div className="flex flex-col gap-4 p-5">
          {Array(3)
            .fill(null)
            .map((item) => (
              <CourseContentItem></CourseContentItem>
            ))}
        </div>
      )}
    </div>
  );
};

export default CourseContentList;
