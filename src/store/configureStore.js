import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import ReduxThunk from "redux-thunk";

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
