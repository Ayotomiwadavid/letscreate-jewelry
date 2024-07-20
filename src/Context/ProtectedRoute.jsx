import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthStatus } from "./Usecontext";


const ProtectedRoute = ({ element: Component }) => {
  const appContext = useContext(AuthStatus);
  const { user } = appContext;

  return user ? <Component /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;