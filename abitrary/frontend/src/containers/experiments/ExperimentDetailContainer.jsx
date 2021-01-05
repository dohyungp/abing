import {
  Input,
  PageHeader,
  Form,
  Button,
  Descriptions,
  DatePicker,
  Badge,
  Switch,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExperiment,
  updateExperiment,
  deleteExperiment,
} from "../../actions/experiments";
import dayjs from "dayjs";

const ExperimentDetailContainer = ({ id }) => {
  const experiment = useSelector((state) => state.experiment);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const handleOnFinish = (data) => {
    dispatch(
      updateExperiment({
        ...data,
        id,
      }),
    );
    setEditable(false);
  };

  const handleOnDelete = () => {
    dispatch(
      deleteExperiment({
        id,
      }),
    );
  };

  useEffect(() => {
    dispatch(getExperiment({ id }));
  }, [dispatch, id]);
  if (experiment.loading) return <div>loading...</div>;
  else if (experiment.error) return <Redirect to={"/404"} />;
  return (
    <>
      <Form
        onFinish={handleOnFinish}
        initialValues={{
          name: experiment.data?.[id]?.name,
          description: experiment.data?.[id]?.description,
          is_running: experiment.data?.[id]?.is_running || false,
          start_date: experiment.data?.[id]?.start_date
            ? dayjs(experiment.data?.[id]?.start_date)
            : null,
          end_date: experiment.data?.[id]?.start_date
            ? dayjs(experiment.data?.[id]?.end_date)
            : null,
        }}
      >
        <PageHeader
          title={
            editable ? (
              <Form.Item
                style={{ marginBottom: 0 }}
                name="name"
                key="experiment_name"
              >
                <Input size="large" />
              </Form.Item>
            ) : (
              experiment.data?.[id]?.name
            )
          }
          onBack={() => window.history.back()}
          extra={[
            <Button
              type="primary"
              htmlType="submit"
              key="experiment_update_button"
              style={{ display: !editable ? "none" : "inline-block" }}
            >
              Save
            </Button>,
            <Button
              htmlType="button"
              onClick={() => setEditable(!editable)}
              key="experiment_toggle_button"
            >
              {editable ? "Cancel" : "Edit"}
            </Button>,
            <Button
              danger
              key="experiment_delete_button"
              onClick={handleOnDelete}
            >
              Delete
            </Button>,
          ]}
        />
        <Descriptions bordered layout="vertical">
          <Descriptions.Item label="State">
            {editable ? (
              <Form.Item
                name="is_running"
                key="is_running"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            ) : (
              <Badge
                status={
                  experiment.data?.[id]?.is_running ? "processing" : "default"
                }
                text={experiment.data?.[id]?.is_running ? "Running" : "Stopped"}
              />
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Start date">
            {editable ? (
              <Form.Item name="start_date" key="start_date">
                <DatePicker />
              </Form.Item>
            ) : (
              experiment.data?.[id]?.start_date
            )}
          </Descriptions.Item>
          <Descriptions.Item label="End date">
            {editable ? (
              <Form.Item name="end_date" key="end_date">
                <DatePicker />
              </Form.Item>
            ) : (
              experiment.data?.[id]?.end_date
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {editable ? (
              <Form.Item name="description" key="experiment_description">
                <TextArea maxLength={500} showCount />
              </Form.Item>
            ) : (
              experiment.data?.[id]?.description
            )}
          </Descriptions.Item>
        </Descriptions>
      </Form>
    </>
  );
};

export default ExperimentDetailContainer;
