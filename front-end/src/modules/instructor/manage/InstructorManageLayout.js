import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import InstructorManageHeader from "./InstructorManageHeader";
import InstructorManageSidebar from "./InstructorManageSidebar";
import { useDispatch } from "react-redux";
import { handleGetSingleCourse } from "../../../redux-toolkit/course/courseHandlerThunk";

const InstructorManageLayout = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  console.log("CourseId", courseId);
  useEffect(() => {
    dispatch(handleGetSingleCourse({ courseId }));
  }, [courseId, dispatch]);
  return (
    <>
      <InstructorManageHeader></InstructorManageHeader>
      <div className="flex">
        <InstructorManageSidebar></InstructorManageSidebar>
        <div className="mb-[1000px]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InstructorManageLayout;
