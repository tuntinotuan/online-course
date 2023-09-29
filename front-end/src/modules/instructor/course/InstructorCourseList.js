import React from "react";
import InstructorCourseItem from "./InstructorCourseItem";
import { useSelector } from "react-redux";

const InstructorCourseList = () => {
  const { myCourses } = useSelector((state) => state.course);
  return (
    <>
      {myCourses?.map((course) => (
        <InstructorCourseItem course={course}></InstructorCourseItem>
      ))}
    </>
  );
};

export default InstructorCourseList;
