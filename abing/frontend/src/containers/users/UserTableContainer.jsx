import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../../components/users/UserTable";
import { createUser, getUsers } from "../../actions/users/users";
import UserModalForm from "../../components/users/UserModalForm";

const UserTableContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleOnCreate = (payload) => {
    dispatch(createUser(payload));
    setVisible(false);
  };
  return (
    <>
      <Row justify="end">
        <Button
          onClick={() => {
            setVisible(true);
          }}
          style={{ margin: 16 }}
          type="primary"
          ghost
        >
          Add a new user
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
    </>
  );
};

export default UserTableContainer;
