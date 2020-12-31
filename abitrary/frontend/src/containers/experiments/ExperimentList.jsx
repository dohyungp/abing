import { Button, Row, Col } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiments, updateExperiment } from "../../actions/experiments";
import ExperimentTable from "../../components/experiments/ExperimentTable";

const ExperimentList = () => {
  const experiments = useSelector((state) => state.experiments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperiments());
  }, [dispatch]);

  const handleOnToggle = (record, event) => {
    dispatch(
      updateExperiment({
        id: record.id,
        is_running: event,
      }),
    );
  };
  return (
    <>
      <Row justify="end">
        <Button
          onClick={console.log}
          style={{ margin: 16 }}
          type="primary"
          ghost
        >
          Add a new experiment
        </Button>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <ExperimentTable
            data={experiments.data}
            onToggle={handleOnToggle}
            loading={experiments.loading}
          />
        </Col>
      </Row>
    </>
  );
};

export default ExperimentList;
