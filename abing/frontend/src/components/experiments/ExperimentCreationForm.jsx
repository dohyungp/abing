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
import ArmFormItem from "./ArmFormItem";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { useBreakpoint } = Grid;

const ExperimentCreationForm = ({ onSubmit }) => {
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
              onFinish={onSubmit}
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
              <Form.Item label="Description" name="description">
                <Input.TextArea maxLength={500} showCount />
              </Form.Item>
              <ArmFormItem />
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
