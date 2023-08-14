import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
