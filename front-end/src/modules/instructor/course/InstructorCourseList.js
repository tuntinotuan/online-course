import React from "react";
import InstructorCourseItem from "./InstructorCourseItem";

const InstructorCourseList = () => {
  return (
    <>
      {Array(5)
        .fill()
        .map((course) => (
          <InstructorCourseItem></InstructorCourseItem>
        ))}
    </>
  );
};

export default InstructorCourseList;
