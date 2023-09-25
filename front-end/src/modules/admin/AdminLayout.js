import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex items-start">
      <AdminSidebar></AdminSidebar>
      <div className="w-full p-5 overflow-hidden">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
