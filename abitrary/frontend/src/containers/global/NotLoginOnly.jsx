import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const NotLoginOnly = () => {
  const { auth } = useSelector((state) => state.auth);
  return <>{auth.data?.access_token && <Redirect to="/" />}</>;
};

export default NotLoginOnly;
