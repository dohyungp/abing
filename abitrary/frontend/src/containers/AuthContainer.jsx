import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthContainer = ({ children }) => {
  const { data } = useSelector((state) => state.login.login);
  return (
    <div>
      {data?.access_token === undefined && <Redirect to="/login" />}
      {children}
    </div>
  );
};

export default AuthContainer;
