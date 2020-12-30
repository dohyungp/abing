import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiments } from "../../actions/experiments";
import ExperimentTable from "../../components/experiments/ExperimentTable";

const ExperimentList = () => {
  const auth = useSelector((state) => state.auth);
  const experiments = useSelector((state) => state.experiments);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.data?.access_token &&
      dispatch(
        getExperiments({
          access_token: auth.data?.access_token,
        }),
      );
  }, [dispatch, auth]);
  return (
    <>
      <ExperimentTable data={experiments.data} />
    </>
  );
};

export default ExperimentList;
