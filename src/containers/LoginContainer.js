import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";

const mapStateToProps = state => {
  return {
    error: state.login.error,
    userId: state.login.userId,
    isLogging: state.login.isLogging,
    isLogged: state.login.isLogged
  };
};

export default connect(mapStateToProps)(LoginPage);
