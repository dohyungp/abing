import Layout from "../containers/global/Layout";
import ExperimentList from "../containers/experiments/ExperimentList";
import LoginRequred from "../containers/global/LoginRequred";

const ExperimentListPage = () => {
  return (
    <Layout>
      <LoginRequred />
      <ExperimentList />
    </Layout>
  );
};

export default ExperimentListPage;
