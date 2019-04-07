import PrivateRoute from "../components/PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(PrivateRoute);
