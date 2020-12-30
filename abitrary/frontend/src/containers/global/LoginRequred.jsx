import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getMe } from "../../actions/users/me";

const LoginRequred = () => {
  const me = useSelector((state) => state.me);
  const dispatch = useDispatch();
  useEffect(() => {
    !me.data.id && dispatch(getMe());
  }, [me, dispatch]);
  return <>{!me.data.id && <Redirect to="/login" />}</>;
};

export default LoginRequred;
