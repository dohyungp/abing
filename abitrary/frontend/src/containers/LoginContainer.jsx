import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import { loginRequest } from "../modules/login";
import logo from "./abitrary-logo.png";
import "./loginformcontainer.css";

const LoginFormContainer = () => {
  const { data, loading, error } = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginRequest(values));
  };

  return (
    <div className="login-form-container">
      {error &&
        message.error("You have entered an invalid username or password")}
      <img src={logo} alt="abitrary" className="login-logo" />
      <LoginForm onFinish={onFinish} loading={loading} />
    </div>
  );
};

export default LoginFormContainer;
