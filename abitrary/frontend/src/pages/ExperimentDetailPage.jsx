import Layout from "../containers/global/Layout";
import { useParams } from "react-router-dom";

const ExperimentDetailPage = () => {
  const { expId } = useParams();
  return <Layout>{expId}</Layout>;
};

export default ExperimentDetailPage;
