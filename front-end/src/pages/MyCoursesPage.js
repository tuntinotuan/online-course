import React from "react";
import NavigateMyCourses from "../components/layout/NavigateMyCourses";
import { Outlet } from "react-router-dom";

const MyCoursesPage = () => {
  return (
    <section>
      <div className="bg-primaryBlack text-white pt-12">
        <div className="page-container-my-course">
          <h1 className="text-4xl mb-8">My learning</h1>
          <NavigateMyCourses></NavigateMyCourses>
        </div>
      </div>
      <div className="page-container-my-course mb-8">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default MyCoursesPage;
