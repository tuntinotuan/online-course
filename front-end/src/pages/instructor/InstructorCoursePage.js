import React from "react";
import { Button } from "../../components/button";
import InstructorCourseList from "../../modules/instructor/course/InstructorCourseList";
import CourseHeading from "../../modules/course/CourseHeading";

const InstructorCoursePage = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full border border-gray-300 shadow-md p-10">
        <h2 className="text-base">Jump Into Course Creation</h2>
        <Button
          className="w-[300px] bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
        >
          Create Your Course
        </Button>
      </div>
      <CourseHeading className="text-3xl !mb-10">Courses</CourseHeading>
      <div className="flex items-center justify-between mb-6">
        <p></p>
        <Button
          className="text-base font-bold bg-purpleTextA4 text-white py-3"
          borderNone
        >
          New course
        </Button>
      </div>
      <InstructorCourseList></InstructorCourseList>
    </div>
  );
};

export default InstructorCoursePage;
