import { Card, Typography } from "antd";
import Layout from "../containers/global/Layout";
const HomePage = () => {
  return (
    <Layout>
      <Card title={<Typography.Title>Welcome to ABING!</Typography.Title>}>
        <Typography.Title level={2}>What is ABING?</Typography.Title>
        <Typography.Paragraph>
          ABING는 AB테스트를 위한 라우팅 툴입니다. 일반적인 비즈니스 모델에서
          사용할 수 있도록 ABING는 별도의 연동과정 없이 AB테스팅을 운영할 수
          있도록 개발되었습니다. UI에서 실험 생성 및 설정 후 route API(
          <Typography.Link>/api/v1/experiments/route</Typography.Link>)
        </Typography.Paragraph>
        에서 각 user id별(필요 시 uuid)로 할당만 받으면 자유롭게 AB테스팅을 할
        수 있습니다.
        <Typography.Title level={2}>Getting started</Typography.Title>
        <Typography.Paragraph>
          <Typography.Title level={3}>실험 생성하기</Typography.Title>
          <ol>
            <li>
              <Typography.Link href="/experiments">
                Experiments - List
              </Typography.Link>
              에서{" "}
              <Typography.Link href="/experiments/create">
                Add a new experiment
              </Typography.Link>
              를 클릭하시거나,{" "}
              <Typography.Link href="/experiments/create">
                Experiments - Create
              </Typography.Link>
              를 눌러 실험 생성 메뉴로 갈 수 있습니다.
            </li>
            <li>
              각 항목을 입력하고,{" "}
              <Typography.Text keyboard>Create</Typography.Text>를 누르면 실험이
              생성됩니다.
              <ul>
                <li>
                  <Typography.Text mark>Name(실험 명)</Typography.Text>은 고유할
                  필요는 없으나, 운영차원에서 코드와 함께 관리되는 것이
                  좋습니다.
                </li>
                <li>
                  Create로 만들때에는 실험은 런칭이 되지 않은 상태로
                  리스트업됩니다.
                </li>
                <li>
                  <Typography.Text keyboard>+ Add Arm</Typography.Text>을 누르면
                  바로 생성할 Arm을 추가할 수 있습니다. 이 때{" "}
                  <Typography.Text mark>
                    Traffic은 얼마나 유저를 해당 Arm에 보낼지에 대한 가중치
                  </Typography.Text>
                  로, 모든 Arm 합산 대비 해당 Arm의 비율로 내부적으로 계산되어
                  추후 Arm 선택 시 반영됩니다.
                </li>
                <li>
                  각 Arm의 Feature는 해당 Arm이 선택되었을 때 보여줄{" "}
                  <Typography.Text mark>Feature flag</Typography.Text>입니다.
                  예를 들어 feature key가{" "}
                  <Typography.Text code>fontColor</Typography.Text>라면 value는{" "}
                  <Typography.Text code>#fff</Typography.Text>같이 입력하여
                  자유롭게 클라이언트에서 dynamic한 값으로 사용할 수 있습니다.
                  물론 key value는 문자열에 불과하기 때문에 사용자에 따라서는
                  분기를 위한 flag 수준으로만 사용해도 무방합니다(e.g key에
                  is_baseline, value에 true 이런 식으로 지정할 수 있습니다)
                </li>
              </ul>
            </li>
          </ol>
          <Typography.Title level={3}>실험 운영하기</Typography.Title>
          <ol>
            <li>
              실험이 성공적으로 만들어졌다면{" "}
              <Typography.Link href="/experiments">
                Experiments - List
              </Typography.Link>
              에서 실험을 찾아볼 수 있습니다.
              <ul>
                <li>
                  실험은 운영 중인 실험, 최근에 만든 실험 순, 최근에 업데이트된
                  실험 순으로 자동 정렬되어 있습니다.
                </li>
                <li>
                  Progress는 일종의 부가정보입니다. Progress가 100%에 도달한다고
                  해서 실험이 종료되거나 하지 않습니다.
                </li>
              </ul>
            </li>
            <li>
              방근 만든 실험을 바로 런칭하고 싶다면 오른쪽 스위치를 누르기만
              하면 됩니다.
              <ul>
                <li>
                  실험 정보를 보고 싶다면{" "}
                  <Typography.Text keyboard>+</Typography.Text>를 눌러
                  펼쳐보거나 실험명에 있는 링크를 눌러 자세히 볼 수 있습니다.
                </li>
              </ul>
            </li>
            <li>
              포함해야 하는 feature 혹은 Arm이 있는데 반영이 안되었다면 링크를
              눌러 수정할 수 있습니다.
            </li>
          </ol>
        </Typography.Paragraph>
      </Card>
    </Layout>
  );
};

export default HomePage;
