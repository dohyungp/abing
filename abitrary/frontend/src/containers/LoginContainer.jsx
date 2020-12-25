import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import { loginRequest } from "../modules/login";
import logo from "./abitrary-logo.png";
import "./loginformcontainer.css";

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch(loginRequest(values));
  };

  return (
    <div className="login-form-container">
      <img src={logo} alt="abitrary" className="login-logo" />
      <LoginForm onFinish={onFinish} />
    </div>
  );
};

export default LoginFormContainer;
