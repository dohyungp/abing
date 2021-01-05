import Layout from "../containers/global/Layout";
import { useParams } from "react-router-dom";
import ExperimentDetailContainer from "../containers/experiments/ExperimentDetailContainer";
import ArmDetailContainer from "../containers/arms/ArmDetailContainer";

const ExperimentDetailPage = () => {
  const { expId } = useParams();
  return (
    <Layout>
      <ExperimentDetailContainer id={expId} />
      <ArmDetailContainer id={expId} />
    </Layout>
  );
};

export default ExperimentDetailPage;
