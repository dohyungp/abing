import React from "react";
import { Modal, Form, Input, Radio } from "antd";

const UserModalForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new user"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          is_superuser: false,
          is_active: true,
        }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Email required",
              type: "email",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Password required",
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item name="name" label="Username">
          <Input type="text" />
        </Form.Item>
        <Form.Item name="is_superuser" style={{ marginBottom: 0 }}>
          <Radio.Group>
            <Radio value={false}>User</Radio>
            <Radio value={true}>Admin</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="is_active" style={{ marginBottom: 0 }}>
          <Radio.Group>
            <Radio value={true}>Active</Radio>
            <Radio value={false}>Inactive</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModalForm;
