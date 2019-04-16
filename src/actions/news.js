import { NEWS_SUCCESS, NEWS_FAILURE, NEWS_REQUEST } from "./actionTypes";
import axios from "axios";
import { url } from "../fixtures/urls";

const fetchNews = () => async dispatch => {
  dispatch({
    type: NEWS_REQUEST
  });

  try {
    const response = await axios.get(`${url}/news`);
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
  } catch (error) {
    dispatch({
      type: NEWS_FAILURE,
      error: error.response.statusText
    });
  }
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
