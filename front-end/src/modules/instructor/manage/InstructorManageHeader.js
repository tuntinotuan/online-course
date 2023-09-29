import React from "react";
import { IconArrowLeft, IconSetting } from "../../../components/icon";
import { Button } from "../../../components/button";
import { useSelector } from "react-redux";

const InstructorManageHeader = () => {
  const { course } = useSelector((state) => state.course);
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-primaryBg text-white shadow-lg p-3">
      <div className="flex items-center gap-4">
        <Button
          className="flex items-center justify-center gap-2 text-base"
          borderNone
          to="/instructor/courses"
        >
          <IconArrowLeft size={16} stroke={3}></IconArrowLeft>Back to courses
        </Button>
        <h1 className="font-bold">{course?.title}</h1>
        <Button
          className="text-xs font-bold uppercase bg-grayA6 !py-1 !px-2"
          borderNone
        >
          Draft
        </Button>
      </div>
      <IconSetting></IconSetting>
    </header>
  );
};

export default InstructorManageHeader;
