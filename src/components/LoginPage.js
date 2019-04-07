import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { login } from "../actions/login";
import PropTypes from "prop-types";

const LoginPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.error) {
      setError(props.error);
      setPass("");
    }
  }, [props.error]);

  const handleLogIn = e => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email address and password");
    } else {
      props.dispatch(login({ email, password }));
    }
  };

  if (props.isLogged) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPass(e.target.value)}
        />
        <button disabled={props.isLogging}>log in</button>
      </form>
    </>
  );
};

LoginPage.propTypes = {
  error: PropTypes.string,
  userId: PropTypes.number,
  isLogging: PropTypes.bool.isRequired
};

export default LoginPage;
