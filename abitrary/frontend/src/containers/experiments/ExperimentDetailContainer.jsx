import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiment } from "../../actions/experiments";

const ExperimentDetailContainer = ({ id }) => {
  const experiment = useSelector((state) => state.experiment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperiment({ id }));
  }, [dispatch, id]);
  return <div>{JSON.stringify(experiment.data[id])}</div>;
};

export default ExperimentDetailContainer;
