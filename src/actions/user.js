import {
  USER_DATA_FAILURE,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS
} from "./actionTypes";
import axios from "axios";
import { url } from "../fixtures/urls";
import { array_move } from "../fixtures/arrayMove";

const loadUserData = userId => dispatch => {
  dispatch({
    type: USER_DATA_REQUEST
  });

  axios
    .get(`${url}/user-info/${userId}`)
    .then(response => {
      if (response.data.status === "ok") {
        array_move(response.data.data.social, 2, 0);
        dispatch({
          type: USER_DATA_SUCCESS,
          payload: response.data.data
        });
      } else if (response.data.status === "err") {
        dispatch({
          type: USER_DATA_FAILURE,
          error: response.data.message
        });
      }
    })
    .catch(error => {
      dispatch({
        type: USER_DATA_FAILURE,
        error: error
      });
    });
};

const shouldLoadUserdata = state => {
  const userData = state.user.data;
  if (userData) {
    return false;
  }
  return true;
};

export const loadUserDataIfNeeded = userId => (dispatch, getState) => {
  if (shouldLoadUserdata(getState())) {
    return dispatch(loadUserData(userId));
  }
};
