import LoginRequired from "../containers/global/LoginRequred";
import Layout from "../containers/global/Layout";

const ExperimentCreationPage = () => {
  return (
    <Layout>
      <LoginRequired />
      실험생성 페이지
    </Layout>
  );
};

export default ExperimentCreationPage;
