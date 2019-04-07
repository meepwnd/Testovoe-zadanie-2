import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ title, text }) => (
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NewsItem;
