import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;
