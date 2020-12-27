import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../components/UserTable";
import { createUser, getUsers } from "../actions/users/users";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import UserModalForm from "../components/UserModalForm";

const UserTableContainer = () => {
  const { login } = useSelector((state) => state.login);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(
      getUsers({
        access_token: login.data?.access_token,
      }),
    );
  }, [dispatch, login]);

  const handleOnCreate = (payload) => {
    dispatch(
      createUser({
        ...payload,
        access_token: login.data?.access_token,
      }),
    );
    setVisible(false);
  };
  return (
    <Layout>
      <Row>
        <Col
          span={24}
          style={{ boxShadow: "0 2px 8px #f0f1f2", background: "#fff" }}
        >
          <Header style={{ background: "transparent" }} />
        </Col>
      </Row>
      <Content>
        <div style={{ background: "#fff" }}>
          <Row justify="end">
            <Button
              onClick={() => {
                setVisible(true);
              }}
              style={{ margin: 16 }}
              type="primary"
              ghost
            >
              Add a user
            </Button>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <UserTable data={users.data} loading={users.loading} />
            </Col>
          </Row>
          <UserModalForm
            visible={visible}
            onCreate={handleOnCreate}
            onCancel={() => setVisible(false)}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default UserTableContainer;
