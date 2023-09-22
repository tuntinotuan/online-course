import React from "react";
import { useSelector } from "react-redux";
import PageNotFound from "../components/notfound/PageNotFound";

const TokenAuthentication = ({ children }) => {
  const { jwt } = useSelector((state) => state.auth);
  if (!jwt) return <PageNotFound />;
  return <>{children}</>;
};

export default TokenAuthentication;
