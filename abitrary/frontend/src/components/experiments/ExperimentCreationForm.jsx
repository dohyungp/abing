import {
  Typography,
  Card,
  Form,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Divider,
  Grid,
  InputNumber,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { useBreakpoint } = Grid;

const ExperimentCreationForm = () => {
  const screens = useBreakpoint();
  const colWrapper = {
    wrapperCol: { span: 16, offset: 4 * screens.sm },
  };

  return (
    <>
      <Row justify="center">
        <Col>
          <Title level={3} style={{ marginTop: 32 }}>
            Experiment Creation Form
          </Title>
          <Divider />
        </Col>
        <Col span={24}>
          <Card bordered={false}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              layout="horizontal"
              onFinish={console.log}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input experiment name!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Schedule">
                <RangePicker />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea maxLength={500} showCount />
              </Form.Item>
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
                              <DeleteOutlined
                                onClick={() => remove(field.name)}
                              />,
                            ]}
                          >
                            <Form.Item
                              {...field}
                              label="Name"
                              name={[field.name, "name"]}
                              fieldKey={[field.fieldKey, "name"]}
                              key={`arm_name_${index}`}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              label="Traffic"
                              name={[field.name, "traffic_weight"]}
                              fieldKey={[field.fieldKey, "traffic_weight"]}
                              key={`arm_traffic_${index}`}
                            >
                              <InputNumber />
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
                        Add Arm
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item {...colWrapper}>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ExperimentCreationForm;
