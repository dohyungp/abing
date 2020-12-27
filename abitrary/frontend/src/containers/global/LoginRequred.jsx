import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginRequred = () => {
  const { data } = useSelector((state) => state.login.login);
  return <>{!data?.access_token && <Redirect to="/login" />}</>;
};

export default LoginRequred;