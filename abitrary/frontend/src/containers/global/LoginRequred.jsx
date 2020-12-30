import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getMe } from "../../actions/users/me";

const LoginRequred = () => {
  const token = useSelector((state) => state.auth?.data?.access_token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return <>{!token && <Redirect to="/login" />}</>;
};

export default LoginRequred;
