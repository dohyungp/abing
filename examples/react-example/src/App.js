import axios from "axios";
import uuid from "uuid";
import { useEffect, useState } from "react";
import "./App.css";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  const [feature, setFeature] = useState({});
  useEffect(() => {
    async function fetchFeautreConfig() {
      let user_id = localStorage.getItem("user_id") || uuid.v4();
      localStorage.setItem("user_id", user_id);
      let response = await axios.get(`/api/v1/experiments/route`, {
        params: { user_id },
      });
      let featureMap = {};
      response.data.forEach((arm) =>
        arm.features.forEach(
          (feature) => (featureMap[feature.key] = feature.value),
        ),
      );
      setFeature(featureMap);
    }

    fetchFeautreConfig();
  }, []);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          color: feature.fontColor,
          backgroundColor: feature.backgroundColor,
          minHeight: "100vh",
        }}
      >
        <div>Hello, abing!</div>
      </header>
    </div>
  );
}

export default App;
