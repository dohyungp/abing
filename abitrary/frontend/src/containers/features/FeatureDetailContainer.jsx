import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatures } from "../../actions/features";

const FeatureDetailContainer = ({ armId }) => {
  const features = useSelector((state) => state.features);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getFeatures({
        arm_id: armId,
      }),
    );
  }, [dispatch, armId]);
  if (features.loading) return <div>loading...</div>;
  return <div>{JSON.stringify(features.data?.[armId])}</div>;
};

export default FeatureDetailContainer;
