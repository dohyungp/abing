import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiments } from "../../actions/experiments";
import ExperimentTable from "../../components/experiments/ExperimentTable";

const ExperimentList = () => {
  const experiments = useSelector((state) => state.experiments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperiments());
  }, [dispatch]);
  return (
    <>
      <ExperimentTable
        data={experiments.data}
        onToggle={(e) => console.log(e)}
      />
    </>
  );
};

export default ExperimentList;
