import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import { url } from "../fixtures/urls";

export const login = loginData => dispatch => {
  dispatch({
    type: LOGIN_REQUEST
  });
  axios
    .post(`${url}/validate`, loginData)
    .then(response => {
      if (response.data.status === "ok") {
        dispatch({
          type: LOGIN_SUCCESS,
          id: response.data.data.id
        });
      } else if (response.data.status === "err") {
        dispatch({
          type: LOGIN_FAILURE,
          error: response.data.message
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAILURE,
        error: error
      });
    });
};

export const logOut = () => ({
  type: "LOG_OUT"
});
