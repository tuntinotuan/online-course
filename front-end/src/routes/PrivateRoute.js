import React from "react";
import { useSelector } from "react-redux";
import PageNotAccess from "../components/notfound/PageNotAccess";

const PrivateRoute = ({ children, isRole = "" }) => {
  const { userData } = useSelector((state) => state.user);
  const { role } = userData;
  if (role?.type === "admin" && isRole === "ADMIN") {
    return children;
  }
  if (
    (role?.type === "moderator" && isRole === "MOD") ||
    (role?.type === "admin" && isRole === "MOD")
  ) {
    return children;
  }
  if (role?.type === "author" && isRole === "AUTHOR") {
    return children;
  }
  if (role?.type === "user" && isRole === "USER") {
    return children;
  }
  return <PageNotAccess></PageNotAccess>;
};

export default PrivateRoute;
