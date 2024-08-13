import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/selectors.js";

export const PrivateRoute = ({ children, redirectTo = "/" }) => {
  const authUser = useSelector(selectUser);
  return !authUser ? <Navigate to={redirectTo} /> : children;
};
