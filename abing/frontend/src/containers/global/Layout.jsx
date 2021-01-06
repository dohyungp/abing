import { Layout as AntdLayout } from "antd";
import { useSelector } from "react-redux";
import Header from "../../components/global/Header";

const Layout = ({ header = true, children }) => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users", superUserOnly: true },
    {
      name: "Experiments",
      path: "/experiments",
      children: [
        { name: "List", path: "/experiments" },
        { name: "Create", path: "/experiments/create" },
      ],
    },
  ];

  const me = useSelector((state) => state.me);
  if (me.loading) return <div>loading...</div>;
  return (
    <AntdLayout>
      {header && <Header menus={menus} me={me} />}
      <AntdLayout.Content>
        <div style={{ background: "#fff" }}>{children}</div>
      </AntdLayout.Content>
    </AntdLayout>
  );
};

export default Layout;
