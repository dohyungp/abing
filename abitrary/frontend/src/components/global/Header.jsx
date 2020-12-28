import { Col, Menu, Row } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/abitrary-logo.png";
import "./header.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="abitrary-header">
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
            <Menu.Item className="menu-item" key="/">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item className="menu-item" key="/users">
              <NavLink to="/users">Users</NavLink>
            </Menu.Item>
            <Menu.Item className="menu-item">Experiments</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
