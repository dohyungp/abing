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
      <ExperimentTable
        data={experiments.data}
        onToggle={handleOnToggle}
        loading={experiments.loading}
      />
    </>
  );
};

export default ExperimentList;
