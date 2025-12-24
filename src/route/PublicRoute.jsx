import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // If already logged in → redirect to dashboard
  return isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
