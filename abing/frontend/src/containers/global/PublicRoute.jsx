import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const token = useSelector((state) => state.auth?.data?.access_token);
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
