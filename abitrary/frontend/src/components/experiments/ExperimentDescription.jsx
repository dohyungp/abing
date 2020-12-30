import { Card, Descriptions } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Paragraph from "antd/lib/typography/Paragraph";
import "./experiment-description.css";

const ExperimentDescription = ({ record }) => {
  const screens = useBreakpoint();
  return (
    <Card>
      <Descriptions
        className="abitrary-experiment-descriptions"
        bordered
        layout="vertical"
        column={{ md: 4, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Start date">
          {record.start_date}
        </Descriptions.Item>
        <Descriptions.Item label="End date">
          {record.end_date}
        </Descriptions.Item>
        <Descriptions.Item label="Created time">
          {record.time_created}
        </Descriptions.Item>
        <Descriptions.Item label="Updated time">
          {record.time_updated}
        </Descriptions.Item>
        <Descriptions.Item label="Arms" span={screens.md ? 4 : 1}>
          <Paragraph>
            <ul>
              {(record.arms || []).length === 0 && "Not set Arms yet."}
              {(record.arms || []).map((arm) => (
                <li key={arm.id}>{arm.name}</li>
              ))}
            </ul>
          </Paragraph>
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={screens.md ? 4 : 1}>
          {record.description}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ExperimentDescription;
