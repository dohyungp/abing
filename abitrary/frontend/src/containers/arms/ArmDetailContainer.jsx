import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArms } from "../../actions/arms";

const ArmDetailContainer = ({ id }) => {
  const arms = useSelector((state) => state.arms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getArms({
        experiment_id: id,
      }),
    );
  }, [dispatch, id]);
  if (arms.loading) return <div>loading...</div>;
  return <div>{JSON.stringify(arms.data?.[id])}</div>;
};

export default ArmDetailContainer;
