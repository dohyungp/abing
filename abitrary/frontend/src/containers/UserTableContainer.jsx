import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../components/UserTable";
import { getUsers } from "../modules/user";

const UserTableContainer = () => {
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
  return <UserTable data={users.data} loading={users.loading} />;
};

export default UserTableContainer;
