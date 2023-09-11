import React from "react";
import Menu from "../../components/layout/Menu";
import { Outlet } from "react-router-dom";

const HomeCourseSelection = ({ table, hiddenMenu = false }) => {
  return (
    <section className={`${table}`}>
      <h1 className="text-3xl font-bold mb-4">A broad selection of courses</h1>
      <p className="text-lg mb-2">
        Choose from 213,000 online video courses with new additions published
        every month
      </p>
      {!hiddenMenu && <Menu></Menu>}
      <Outlet></Outlet>
    </section>
  );
};

export default HomeCourseSelection;
