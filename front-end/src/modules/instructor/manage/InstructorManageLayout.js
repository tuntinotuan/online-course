import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import InstructorManageHeader from "./InstructorManageHeader";
import InstructorManageSidebar from "./InstructorManageSidebar";

const InstructorManageLayout = () => {
  return (
    <>
      <InstructorManageHeader></InstructorManageHeader>
      <div className="flex gap-5 mt-14 p-8">
        <InstructorManageSidebar></InstructorManageSidebar>
        <div className="flex-1 shadow-[0_2px_5px_2px__rgba(0,0,0,0.1)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InstructorManageLayout;
