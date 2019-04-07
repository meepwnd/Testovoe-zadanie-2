import {
  NEWS_REQUEST,
  NEWS_FAILURE,
  NEWS_SUCCESS
} from "../actions/actionTypes";
import handleError from "../fixtures/handleError";

const initialNews = {
  isFetching: false,
  data: undefined
};

const newsReducer = (state = initialNews, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true, error: undefined };
    case NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: undefined
      };
    case NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: handleError[action.error] || action.error
      };
    default:
      return state;
  }
};
export default newsReducer;
