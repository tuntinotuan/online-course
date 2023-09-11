import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllCourses } from "../redux-toolkit/course/courseHandlerThunk";
import CourseLayoutHeading from "../components/layout/CourseLayoutHeading";
import CourseList from "../components/course/CourseList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(handleGetAllCourses());
  }, [dispatch]);

  return (
    <div className="page-container my-20 overflow-hidden">
      <Outlet></Outlet>
      <CourseLayoutHeading title="All Courses">
        <CourseList data={allCourses}></CourseList>
      </CourseLayoutHeading>
    </div>
  );
};

export default HomePage;
