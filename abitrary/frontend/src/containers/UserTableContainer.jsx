import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../components/UserTable";
import { createUser, getUsers } from "../actions/users/users";

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

  const onButtonClick = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        access_token: login.data?.access_token,
        email: "test4@test.com",
        name: "string",
        password: "string",
      }),
    );
  };
  return (
    <>
      <Row justify="end">
        <Button
          onClick={onButtonClick}
          style={{ margin: 16 }}
          type="primary"
          ghost
        >
          유저 추가
        </Button>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <UserTable data={users.data} loading={users.loading} />
        </Col>
      </Row>
    </>
  );
};

export default UserTableContainer;
