import React, { useEffect, useState } from "react";
import { IconArrowDown } from "../../components/icon";
import CourseContentItem from "./CourseContentItem";

const CourseContentList = ({ listData, toggleAll }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    toggleAll ? setToggle(true) : setToggle(false);
  }, [toggleAll]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="border border-gray-300 dark:border-primaryBlack border-b-transparent last:border-b-gray-300 dark:last:border-b-primaryBlack">
      <div
        className={`flex items-center justify-between w-full bg-grayF7 dark:bg-darkMain border border-transparent py-3 px-5 cursor-pointer ${
          toggle ? "border-b-gray-300 dark:border-primaryBlack" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="flex items-center gap-4">
          <IconArrowDown
            className={`${toggle ? "-rotate-180" : ""} transition-all`}
            size={14}
          ></IconArrowDown>
          <h2 className="text-[15px] font-bold">
            {listData.lesson || "Intro to Course and Python"}
          </h2>
        </div>
        <span>{listData?.video_courses?.length} lectures • 7 min</span>
      </div>
      {toggle && (
        <div className="flex flex-col gap-4 p-5">
          {listData?.video_courses?.length > 0 ? (
            listData?.video_courses?.map((video) => (
              <CourseContentItem video={video}></CourseContentItem>
            ))
          ) : (
            <p className="text-xs text-grayA6">Next release course</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseContentList;
