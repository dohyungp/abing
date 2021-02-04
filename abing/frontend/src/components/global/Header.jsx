import { Button, Col, Drawer, Menu, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/abing-logo.svg";
import "./header.css";
import { useState } from "react";

const Header = ({ menus = [], me } = {}) => {
  const location = useLocation();
  const [drawerVisible, setDrawerVisble] = useState(false);
  return (
    <header className="abing-header">
      <span className="mobile-menu-icon">
        <Button
          type="text"
          style={{ padding: "0", height: "0" }}
          onClick={() => setDrawerVisble(true)}
        >
          <MenuOutlined />
        </Button>
      </span>
      <Drawer
        title="ABING"
        key="right"
        visible={drawerVisible}
        closable={false}
        bodyStyle={{ padding: "0" }}
        onClose={() => setDrawerVisble(false)}
      >
        <Menu
          mode="inline"
          className="abing-mobile-menu"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          {menus.map((menu) => {
            if (menu.superUserOnly && !me.data?.is_superuser) return null;
            return (menu?.children || []).length ? (
              <Menu.SubMenu
                title={menu.name}
                key={menu.path}
                className="menu-item"
              >
                {menu.children.map((submenu) => (
                  <Menu.Item className="menu-item" key={submenu.path}>
                    <NavLink to={submenu.path}>{submenu.name}</NavLink>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item className="menu-item" key={menu.path}>
                <NavLink to={menu.path}>{menu.name}</NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={8}>
          <Link to="/">
            <img src={logo} alt="ABING" className="logo" />
          </Link>
        </Col>
        <Col xs={0} sm={0} md={18} lg={18} xl={16}>
          <Menu
            mode="horizontal"
            className="abing-menu"
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
          >
            {menus.map((menu) => {
              if (menu.superUserOnly && !me.data?.is_superuser) return null;
              return (menu?.children || []).length ? (
                <Menu.SubMenu
                  title={menu.name}
                  key={menu.path}
                  className="menu-item"
                >
                  {menu.children.map((submenu) => (
                    <Menu.Item className="menu-item" key={submenu.path}>
                      <NavLink to={submenu.path}>{submenu.name}</NavLink>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item className="menu-item" key={menu.path}>
                  <NavLink to={menu.path}>{menu.name}</NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
