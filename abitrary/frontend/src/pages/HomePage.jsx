import React from "react";
import LoginRequred from "../containers/LoginRequred";
import UserTableContainer from "../containers/UserTableContainer";

const HomePage = () => {
  return (
    <LoginRequred>
      <UserTableContainer />
    </LoginRequred>
  );
};

export default HomePage;
