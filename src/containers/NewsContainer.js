import { connect } from "react-redux";
import NewsPage from "../components/NewsPage";

const mapStateToProps = state => ({
  news: state.news.data || [],
  isFetching: state.news.isFetching,
  error: state.news.error
});

export default connect(mapStateToProps)(NewsPage);
