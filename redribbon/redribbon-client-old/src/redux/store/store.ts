import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { authenticationReducer } from "../reducers/authenticationReducer";
import logger from "redux-logger";
import { AppActions } from "../../types/AppActionTypes";
import { composeWithDevTools } from "redux-devtools-extension";
// import expensesReducer from "../reducers/expensesReducer";

const initialState = {};

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  // expenses: expensesReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
  // composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
