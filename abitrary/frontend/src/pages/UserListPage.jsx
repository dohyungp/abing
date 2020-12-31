import React from "react";
import Layout from "../containers/global/Layout";
import UserTableContainer from "../containers/users/UserTableContainer";

const UserListPage = () => {
  return (
    <Layout>
      <UserTableContainer />
    </Layout>
  );
};

export default UserListPage;
