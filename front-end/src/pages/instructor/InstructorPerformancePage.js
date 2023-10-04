import React from "react";
import InstructorPerformanceSidebar from "../../modules/instructor/performance/InstructorPerformanceSidebar";
import { Outlet } from "react-router-dom";

const InstructorPerformancePage = () => {
  return (
    <div className="flex h-full">
      <InstructorPerformanceSidebar></InstructorPerformanceSidebar>
      <div className="ml-[230px] w-full flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default InstructorPerformancePage;
