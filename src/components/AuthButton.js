import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../actions/login";

const AuthButton = withRouter(props => {
  return props.isLogged ? (
    <button
      className="btn btn-dark"
      onClick={() => {
        props.dispatch(logOut());
        props.history.push("/");
      }}
    >
      Log out
    </button>
  ) : (
    <button
      className="btn btn-dark"
      onClick={() => props.history.push("/login")}
    >
      Log in
    </button>
  );
});

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
});

AuthButton.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(AuthButton);
