import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/login/LoginForm";
import { loginRequest } from "../../actions/users/auth";
import logo from "../../assets/abitrary-logo.png";
import "./loginformcontainer.css";

const LoginFormContainer = () => {
  const { loading, error } = useSelector((state) => state.auth);
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
