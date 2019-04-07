import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/actionTypes";
import handleError from "../fixtures/handleError";

const loginInitial = {
  isLogging: false,
  isLogged: false
};
const loginReducer = (state = loginInitial, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLogging: true, isLogged: false, error: undefined };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        isLogged: true,
        userId: action.id,
        error: undefined
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
        error: handleError[action.error] || action.error
      };
    case "LOG_OUT":
      return { ...state, isLogged: false, userId: undefined };
    default:
      return state;
  }
};

export default loginReducer;
