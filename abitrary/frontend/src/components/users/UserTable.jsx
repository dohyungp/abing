import { Table, Tag } from "antd";

import React from "react";

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Username",
    dataIndex: "name",
    key: "name",
    responsive: ["md"],
  },
  {
    title: "Active",
    dataIndex: "is_active",
    key: "is_active",
    render: (value) =>
      value ? <Tag color="green">active</Tag> : <Tag color="red">inactive</Tag>,
  },
  {
    title: "Admin",
    dataIndex: "is_superuser",
    key: "is_superuser",
    render: (value) =>
      value ? <Tag color="geekblue">admin</Tag> : <Tag>user</Tag>,
  },
];

const UserTable = ({ data, loading }) => {
  return (
    <Table columns={columns} dataSource={data} loading={loading} rowKey="id" />
  );
};

export default UserTable;
