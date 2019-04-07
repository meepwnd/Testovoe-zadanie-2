import { NEWS_SUCCESS, NEWS_FAILURE, NEWS_REQUEST } from "./actionTypes";
import axios from "axios";
import { url } from "../fixtures/urls";

const fetchNews = () => dispatch => {
  dispatch({
    type: NEWS_REQUEST
  });
  axios
    .get(`${url}/news`)
    .then(response => {
      if (response.data.status === "ok") {
        dispatch({
          type: NEWS_SUCCESS,
          payload: response.data.data
        });
      } else if (response.data.status === "err") {
        dispatch({
          type: NEWS_FAILURE,
          error: response.data.message
        });
      }
    })
    .catch(error => {
      dispatch({
        type: NEWS_FAILURE,
        error: error
      });
    });
};

const shouldFetchNews = state => {
  const news = state.news.data;
  if (news) {
    return false;
  }
  return true;
};

export const fetchNewsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchNews(getState())) {
    return dispatch(fetchNews());
  }
};
