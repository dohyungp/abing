import { Layout as AntdLayout } from "antd";
import Header from "./Header";

const Layout = ({ header = true, children }) => {
  return (
    <AntdLayout>
      {header && <Header />}
      <AntdLayout.Content>
        <div style={{ background: "#fff" }}>{children}</div>
      </AntdLayout.Content>
    </AntdLayout>
  );
};

export default Layout;
