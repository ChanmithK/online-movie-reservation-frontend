import React from "react";
import { Outlet, Navigate } from "react-router";

const PrivateWrapper = () => {
  const token = window.localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" replace />;
};
export default PrivateWrapper;
