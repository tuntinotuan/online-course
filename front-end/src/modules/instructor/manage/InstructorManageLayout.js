import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import InstructorManageHeader from "./InstructorManageHeader";
import InstructorManageSidebar from "./InstructorManageSidebar";
import { useDispatch } from "react-redux";
import { handleGetSingleCourse } from "../../../redux-toolkit/course/courseHandlerThunk";

const InstructorManageLayout = () => {
  return (
    <>
      <InstructorManageHeader></InstructorManageHeader>
      <div className="flex gap-5 mt-14 p-8">
        <InstructorManageSidebar></InstructorManageSidebar>
        <div className="flex-1 border border-red-500 shadow-xl">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InstructorManageLayout;
