import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchNewsIfNeeded } from "../actions/news";
import NewsItem from "./NewsItem";

const NewsPage = ({ news, dispatch, isFetching, error }) => {
  useEffect(() => {
    dispatch(fetchNewsIfNeeded());
  }, [dispatch]);

  return isFetching ? (
    <p>loadiing...</p>
  ) : error ? (
    <p>{error}</p>
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
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default NewsPage;
