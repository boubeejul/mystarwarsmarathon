import { Navigate } from "react-router-dom";

export const Restricted = ({ isLogged, role, children }) => {
  if (role != 'admin' && isLogged) {
    return <Navigate to="/painel"/>;
  } else if (!isLogged) {
    return <Navigate to="/login"/>;
  }
  return children;
}