import { List, Card, Button, Form, Typography, InputNumber, Input } from "antd";
import { EditOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import FeatureDetailContainer from "../features/FeatureDetailContainer";
import { deleteArm, updateArm } from "../../actions/arms";
import { useDispatch } from "react-redux";
import { createFeature } from "../../actions/features";

const ArmListItem = ({ item }) => {
  const [editable, setEditable] = useState();
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(
      deleteArm({
        id: item.id,
      }),
    );
  };

  const handleOnFinish = (data) => {
    const { features, ...arm } = data;
    const hasArmUpdate = Object.entries(arm).some(([k, v]) => {
      return item?.[k] !== v;
    });
    hasArmUpdate &&
      dispatch(
        updateArm({
          data: arm,
          id: item.id,
        }),
      );

    (features || []).length > 0 &&
      features.map((feature) => {
        dispatch(
          createFeature({
            data: { ...feature, arm_id: item.id },
          }),
        );
        return null;
      });
    setEditable(false);
  };
  useEffect(() => {
    return () => {};
  });
  return (
    <Form
      key="arm_update_form"
      initialValues={{ traffic_weight: item.traffic_weight, name: item.name }}
      onFinish={handleOnFinish}
    >
      <List.Item key={item.id} style={{ padding: "14px" }}>
        <Card
          title={
            editable ? (
              <Form.Item name="name">
                <Input />
              </Form.Item>
            ) : (
              item.name
            )
          }
          actions={[
            editable ? (
              <Button
                type="link"
                htmlType="submit"
                key="arm_update_button"
                size="large"
              >
                <SaveOutlined />
              </Button>
            ) : (
              <Button
                htmlType="button"
                type="text"
                size="large"
                onClick={() => setEditable(true)}
                key="arm_toggle_button"
              >
                <EditOutlined />
              </Button>
            ),
            <Button
              danger
              key="arm_delete"
              type="text"
              size="large"
              onClick={handleOnDelete}
            >
              <DeleteOutlined />
            </Button>,
          ]}
        >
          <div className="ant-list-header">Traffic weight</div>
          <div style={{ padding: "12px" }}>
            {editable ? (
              <Form.Item name="traffic_weight">
                <InputNumber required size="large" />
              </Form.Item>
            ) : (
              <Typography.Title level={5}>
                {item.traffic_weight}
              </Typography.Title>
            )}
          </div>
          <FeatureDetailContainer armId={item.id} editable={editable} />
        </Card>
      </List.Item>
    </Form>
  );
};

export default ArmListItem;
