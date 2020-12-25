import LoginForm from "../components/LoginForm";
import logo from "./abitrary-logo.png";
import "./loginformcontainer.css";

const LoginFormContainer = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-form-container">
      <img src={logo} alt="abitrary" className="login-logo" />
      <LoginForm onFinish={onFinish} />
    </div>
  );
};

export default LoginFormContainer;
