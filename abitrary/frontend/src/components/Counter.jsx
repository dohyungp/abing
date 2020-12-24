import { Button, Statistic } from "antd";

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <Statistic title="Counter" value={number} />
      <Button onClick={onIncrease} type="primary">
        +1
      </Button>
      <Button onClick={onDecrease}>-1</Button>
    </div>
  );
}

export default Counter;
