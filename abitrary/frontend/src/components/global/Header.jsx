import { Button, Col, Drawer, Menu, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/abitrary-logo.png";
import "./header.css";
import { useState } from "react";

const Header = ({ menus = [] } = {}) => {
  const location = useLocation();
  const [drawerVisible, setDrawerVisble] = useState(false);
  return (
    <header className="abitrary-header">
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
        title="ABITRARY"
        key="right"
        visible={drawerVisible}
        closable={false}
        bodyStyle={{ padding: "0" }}
        onClose={() => setDrawerVisble(false)}
      >
        <Menu
          mode="vertical-right"
          className="abitrary-mobile-menu"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          {menus.map((menu) => {
            return (
              <Menu.Item className="menu-item" key={menu.path}>
                <NavLink to={menu.path}>{menu.name}</NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
      <Row>
        <Col xs={24} sm={24} md={4} lg={6} xl={8}>
          <img src={logo} alt="ABITRARY" className="logo" />
        </Col>
        <Col xs={0} sm={0} md={20} lg={18} xl={16}>
          <Menu
            mode="horizontal"
            className="abitrary-menu"
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
          >
            {menus.map((menu) => {
              return (
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
