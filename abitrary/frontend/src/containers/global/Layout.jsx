import { Layout as AntdLayout } from "antd";
import Header from "../../components/global/Header";

const Layout = ({ header = true, children }) => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    {
      name: "Experiments",
      path: "/experiments",
      children: [
        { name: "List", path: "/experiments" },
        { name: "Create", path: "/experiments/create" },
      ],
    },
  ];

  return (
    <AntdLayout>
      {header && <Header menus={menus} />}
      <AntdLayout.Content>
        <div style={{ background: "#fff" }}>{children}</div>
      </AntdLayout.Content>
    </AntdLayout>
  );
};

export default Layout;
