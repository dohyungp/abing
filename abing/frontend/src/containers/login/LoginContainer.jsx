import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/login/LoginForm";
import { loginRequest } from "../../actions/users/auth";
import logo from "../../assets/abing-logo.svg";
import "./loginformcontainer.css";
import { useEffect } from "react";

const LoginFormContainer = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginRequest(values));
  };

  useEffect(() => {
    // When user logout or before login, state will cleanup.
    localStorage.removeItem("state");
  });

  return (
    <div className="login-form-container">
      {error &&
        message.error("You have entered an invalid username or password")}
      <img src={logo} alt="abing" className="login-logo" />
      <LoginForm onFinish={onFinish} loading={loading} />
    </div>
  );
};

export default LoginFormContainer;
