import LoginForm from "../components/LoginForm";

const LoginFormContainer = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return <LoginForm onFinish={onFinish} />;
};

export default LoginFormContainer;
