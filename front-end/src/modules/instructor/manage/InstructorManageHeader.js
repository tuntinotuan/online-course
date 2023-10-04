import React from "react";
import { IconArrowLeft, IconSetting } from "../../../components/icon";
import { Button } from "../../../components/button";
import { useSelector } from "react-redux";
import LabelStatus from "../../../components/label/LabelStatus";
import { Link, useParams } from "react-router-dom";

const InstructorManageHeader = () => {
  const { courseId } = useParams();
  const { course } = useSelector((state) => state.course);
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-primaryBlack text-white shadow-lg py-2 pl-2 pr-4 z-50">
      <div className="flex items-center gap-4">
        <Button
          className="flex items-center justify-center gap-2 text-base"
          borderNone
          to="/instructor/courses"
        >
          <IconArrowLeft size={16} stroke={3}></IconArrowLeft>Back to courses
        </Button>
        <h1 className="text-lg font-bold">{course?.title}</h1>
        <LabelStatus type={course.status}>{course.status}</LabelStatus>
      </div>
      <Link to={`/instructor/course/${courseId}/manage/settings`}>
        <IconSetting></IconSetting>
      </Link>
    </header>
  );
};

export default InstructorManageHeader;
