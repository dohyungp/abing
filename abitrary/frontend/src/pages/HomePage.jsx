import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../containers/AuthContainer";
import { getUsers } from "../modules/user";

const HomePage = () => {
  const { login } = useSelector((state) => state.login);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUsers({
        access_token: login.data?.access_token,
      }),
    );
  }, [dispatch, login]);
  return <AuthContainer>{JSON.stringify(users)}</AuthContainer>;
};

export default HomePage;
