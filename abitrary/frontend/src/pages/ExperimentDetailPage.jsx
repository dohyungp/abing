import Layout from "../containers/global/Layout";
import { useParams } from "react-router-dom";
import ExperimentDetailContainer from "../containers/experiments/ExperimentDetailContainer";

const ExperimentDetailPage = () => {
  const { expId } = useParams();
  return (
    <Layout>
      <ExperimentDetailContainer id={expId} />
    </Layout>
  );
};

export default ExperimentDetailPage;
