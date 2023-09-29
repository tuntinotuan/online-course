import React, { useEffect } from "react";
import { Button } from "../../components/button";
import InstructorCourseList from "../../modules/instructor/course/InstructorCourseList";
import CourseHeading from "../../modules/course/CourseHeading";
import { useDispatch, useSelector } from "react-redux";
import { handleGetMyCourses } from "../../redux-toolkit/course/courseHandlerThunk";

const InstructorCoursePage = () => {
  const dispatch = useDispatch();
  const { myCourses } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(handleGetMyCourses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {myCourses?.length > 0 ? (
        <>
          <CourseHeading className="text-3xl !mb-10">Courses</CourseHeading>
          <div className="flex items-center justify-between mb-6">
            <p></p>
            <Button
              className="text-base font-bold bg-purpleTextA4 text-white py-3"
              borderNone
              to="/course/create/1"
            >
              New course
            </Button>
          </div>
          <InstructorCourseList></InstructorCourseList>
        </>
      ) : (
        <div className="flex items-center justify-between w-full border border-gray-300 shadow-md p-10">
          <h2 className="text-base">Jump Into Course Creation</h2>
          <Button
            className="w-[300px] bg-purpleTextA4 text-base text-white font-bold py-3"
            borderNone
            to="/course/create/1"
          >
            Create Your Course
          </Button>
        </div>
      )}
    </div>
  );
};

export default InstructorCoursePage;
