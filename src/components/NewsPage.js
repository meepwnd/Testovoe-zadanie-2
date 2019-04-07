import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchNewsIfNeeded } from "../actions/news";
import NewsItem from "./NewsItem";

const NewsPage = ({ news, dispatch, isFetching }) => {
  useEffect(() => {
    dispatch(fetchNewsIfNeeded());
  }, []);

  return isFetching ? (
    <p>loadiing...</p>
  ) : (
    <>
      {news.map(newsItem => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </>
  );
};

NewsPage.propTypes = {
  news: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default NewsPage;
