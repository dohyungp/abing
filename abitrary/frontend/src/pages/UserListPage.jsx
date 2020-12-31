import React from "react";
import Layout from "../components/global/Layout";
import LoginRequred from "../containers/global/LoginRequred";
import UserTableContainer from "../containers/users/UserTableContainer";

const UserListPage = () => {
  return (
    <Layout>
      <LoginRequred />
      <UserTableContainer />
    </Layout>
  );
};

export default UserListPage;
