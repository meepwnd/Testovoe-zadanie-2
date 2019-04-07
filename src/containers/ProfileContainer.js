import { connect } from "react-redux";
import Profile from "../components/Profile";

const mapStateToProps = state => ({
  id: state.login.userId,
  userData: state.user.data,
  isLoading: state.user.isLoading
});

export default connect(mapStateToProps)(Profile);
