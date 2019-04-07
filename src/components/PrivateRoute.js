import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  return props.isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

export default PrivateRoute;
