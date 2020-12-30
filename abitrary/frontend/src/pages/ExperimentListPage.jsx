import ExperimentTable from "../components/experiments/ExperimentTable";
import Layout from "../components/global/Layout";

const ExperimentListPage = () => {
  return (
    <Layout>
      <ExperimentTable
        data={[
          {
            name: "Splash Screen Test",
            description: "Splash image test.",
            is_running: false,
            start_date: "2020-12-20",
            end_date: "2020-12-31",
            id: 0,
            time_created: "2020-12-28T03:56:01.195Z",
            time_updated: "2020-12-28T03:56:01.195Z",
            arms: [
              { name: "baseline", id: 1 },
              { name: "variant1", id: 2 },
            ],
          },
          {
            name: "Button Color Test",
            description: "Button Red vs Blue one.",
            is_running: false,
            start_date: "2020-12-20",
            end_date: "2020-12-28",
            id: 1,
            time_created: "2020-12-28T03:56:01.195Z",
            time_updated: "2020-12-28T03:56:01.195Z",
            arms: [],
          },
        ]}
      />
    </Layout>
  );
};

export default ExperimentListPage;
