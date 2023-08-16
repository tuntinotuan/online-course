import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../modules/user/UserSidebar";

const UserPage = () => {
  return (
    <div className="page-container-fluid grid grid-cols-10 border border-gray-300 mt-5 mb-10">
      <UserSidebar></UserSidebar>
      <div className="col-span-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserPage;
