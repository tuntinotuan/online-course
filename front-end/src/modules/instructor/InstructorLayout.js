import React from "react";
import { Outlet } from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";
import InstructorHeader from "./InstructorHeader";
import Footer from "../../components/layout/Footer";

const InstructorLayout = () => {
  return (
    <>
      <div className="relative flex items-start">
        <InstructorSidebar></InstructorSidebar>
        <div className="w-full mb-[200px]">
          <InstructorHeader></InstructorHeader>
          <div className="ml-14 p-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InstructorLayout;
