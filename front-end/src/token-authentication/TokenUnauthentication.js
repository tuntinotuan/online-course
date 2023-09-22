import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const TokenUnauthentication = ({ children, navigate = "" }) => {
  const { jwt } = useSelector((state) => state.auth);
  if (jwt) return navigate ? <Navigate to={navigate}></Navigate> : null;
  return children;
};

export default TokenUnauthentication;
