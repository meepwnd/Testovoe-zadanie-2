import { combineReducers } from "redux";
import userReducer from "./user";
import newsReducer from "./news";
import loginReducer from "./login";

const reducer = combineReducers({
  news: newsReducer,
  login: loginReducer,
  user: userReducer
});

export default reducer;
