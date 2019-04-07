import handleError from "../fixtures/handleError";
import {
  USER_DATA_FAILURE,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS
} from "../actions/actionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return { ...state, isLoading: true };
    case USER_DATA_SUCCESS:
      return { ...state, isLoading: false, error: "", data: action.payload };
    case USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: handleError[action.error] || action.error
      };
    default:
      return state;
  }
};

export default userReducer;
