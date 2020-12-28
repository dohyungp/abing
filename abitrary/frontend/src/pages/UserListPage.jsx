import React from "react";
import LoginRequred from "../containers/global/LoginRequred";
import UserTableContainer from "../containers/users/UserTableContainer";

const UserListPage = () => {
  return (
    <>
      <LoginRequred />
      <UserTableContainer />
    </>
  );
};

export default UserListPage;
