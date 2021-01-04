import { List, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArms } from "../../actions/arms";
import ArmListItem from "./ArmListItem";

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
  return (
    <div>
      <List
        header={
          <Typography.Title level={4} style={{ paddingLeft: "24px" }}>
            Arm List
          </Typography.Title>
        }
        grid={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        dataSource={arms.data?.[id] || []}
        renderItem={(item) => <ArmListItem item={item} />}
      />
    </div>
  );
};

export default ArmDetailContainer;
