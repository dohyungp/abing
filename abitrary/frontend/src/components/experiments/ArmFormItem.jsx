import { Form, Row, Col, Input, Card, InputNumber, Button, Grid } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const ArmFormItem = () => {
  const screens = useBreakpoint();
  const colWrapper = {
    wrapperCol: { span: 16, offset: 4 * screens.sm },
  };

  return (
    <Form.List name="arms">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field, index) => (
            <Row
              justify="center"
              style={{ marginBottom: 8 }}
              key={`arm_row_${index}`}
            >
              <Col xs={24} sm={16}>
                <Card
                  style={{ background: "#fbfbfb" }}
                  title={`Arm ${index + 1}`}
                  actions={[
                    <DeleteOutlined onClick={() => remove(field.name)} />,
                  ]}
                >
                  <Form.Item
                    {...field}
                    label="Name"
                    name={[field.name, "name"]}
                    fieldKey={[field.fieldKey, "name"]}
                    key={`arm_name_${index}`}
                    rules={[
                      { required: true, message: "Please input arm name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Traffic"
                    name={[field.name, "traffic_weight"]}
                    fieldKey={[field.fieldKey, "traffic_weight"]}
                    key={`arm_traffic_${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please allocate arm traffic!",
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.List name={[field.name, "features"]}>
                    {(features, { add, remove }) => (
                      <>
                        {features.map((feature, featureIndex) => (
                          <Row
                            justify="center"
                            style={{ marginBottom: 8 }}
                            key={`feature_row_${featureIndex}`}
                          >
                            <Col xs={24} sm={16}>
                              <Card
                                actions={[
                                  <DeleteOutlined
                                    onClick={() => remove(feature.name)}
                                  />,
                                ]}
                              >
                                <Form.Item
                                  {...feature}
                                  key={`feature_key_${featureIndex}`}
                                  name={[feature.name, "key"]}
                                  fieldKey={[feature.fieldKey, "key"]}
                                  wrapperCol={{ span: 24 }}
                                >
                                  <Input placeholder="key" />
                                </Form.Item>
                                <Form.Item
                                  {...feature}
                                  key={`feature_value_${featureIndex}`}
                                  name={[feature.name, "value"]}
                                  fieldKey={[feature.fieldKey, "value"]}
                                  wrapperCol={{ span: 24 }}
                                >
                                  <Input.TextArea placeholder="value" />
                                </Form.Item>
                              </Card>
                            </Col>
                          </Row>
                        ))}
                        <Form.Item {...colWrapper}>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add Feature
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Card>
              </Col>
            </Row>
          ))}
          <Form.Item {...colWrapper}>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add Arm
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default ArmFormItem;
