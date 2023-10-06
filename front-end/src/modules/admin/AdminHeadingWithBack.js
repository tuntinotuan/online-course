import React from "react";
import { Link } from "react-router-dom";
import { IconChevronLeft } from "../../components/icon";
import AdminHeading from "./AdminHeading";

const AdminHeadingWithBack = ({ title, to, ...props }) => {
  return (
    <div className="flex items-center justify-between">
      <Link to={to} {...props}>
        <IconChevronLeft></IconChevronLeft>
      </Link>
      <AdminHeading>{title}</AdminHeading>
    </div>
  );
};

export default AdminHeadingWithBack;
