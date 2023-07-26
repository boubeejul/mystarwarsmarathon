import { Navigate } from "react-router-dom";

export const Protected = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/login"/>;
  }
  return children;
}