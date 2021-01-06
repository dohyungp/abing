import { List, Typography, Form, Card, Input, InputNumber, Button } from "antd";
import { createArms } from "../../actions/arms";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArms } from "../../actions/arms";
import ArmListItem from "./ArmListItem";

const ArmDetailContainer = ({ id }) => {
  const arms = useSelector((state) => state.arms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getArms({
        experiment_id: id,
      }),
    );
  }, [dispatch, id]);
  const handleOnFinishCreation = (data) => {
    const { arms } = data;
    dispatch(
      createArms({
        data: arms.map((arm) => ({
          ...arm,
          experiment_id: id,
        })),
      }),
    );
  };

  if (arms.loading) return <div>loading...</div>;
  return (
    <div>
      <List
        header={
          <Typography.Title level={4} style={{ paddingLeft: "24px" }}>
            Arm List
          </Typography.Title>
        }
        grid={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        dataSource={arms.data?.[id] || []}
        renderItem={(item) => <ArmListItem item={item} />}
      />
      <Form key="arm_creation_form" onFinish={handleOnFinishCreation}>
        <Form.List name="arms">
          {(armFields, { add, remove }) => (
            <>
              {armFields.map((armField, index) => (
                <div style={{ padding: "14px" }} key={`new_arm_${index}`}>
                  <Card
                    title={
                      <Form.Item
                        {...armField}
                        name={[armField.name, "name"]}
                        rules={[
                          { required: true, message: "Arm name is required!" },
                        ]}
                      >
                        <Input placeholder="Arm name" size="large" />
                      </Form.Item>
                    }
                    actions={[
                      <DeleteOutlined onClick={() => remove(armField.name)} />,
                    ]}
                  >
                    <div className="ant-list-header">Traffic weight</div>
                    <div style={{ padding: "12px" }}>
                      <Form.Item
                        {...armField}
                        name={[armField.name, "traffic_weight"]}
                        rules={[
                          {
                            required: true,
                            message: "Traffic weight is required!",
                          },
                        ]}
                      >
                        <InputNumber />
                      </Form.Item>
                    </div>
                  </Card>
                </div>
              ))}
              {armFields.length > 0 && (
                <Form.Item style={{ padding: "0 14px 0 14px" }}>
                  <Button htmlType="submit" block type="primary" size="large">
                    Save new arms
                  </Button>
                </Form.Item>
              )}
              <Form.Item style={{ padding: "0 14px 60px 14px" }}>
                <Button
                  icon={<PlusOutlined />}
                  type="dashed"
                  size="large"
                  block
                  onClick={() => add()}
                >
                  Add new arms
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default ArmDetailContainer;
