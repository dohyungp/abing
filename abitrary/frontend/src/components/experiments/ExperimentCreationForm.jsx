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
} from "antd";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { useBreakpoint } = Grid;

const ExperimentCreationForm = () => {
  const screens = useBreakpoint();
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
            >
              <Row style={{ marginBottom: "18px" }}>
                <Col span={4} />
                <Col span={16}>
                  <Title level={4}>Experiment setting</Title>
                </Col>
              </Row>
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
              <Form.Item wrapperCol={{ span: 14, offset: 4 * screens.md }}>
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
