import { combineReducers } from "@reduxjs/toolkit";
// import loginReducer from "../features/authentication/login/loginSlice";
// import sessionReducer from "../features/authentication/session/sessionSlice";
import authenticationReducer from "../features/authentication/authenticate/authenticateSlice";

const rootReducer = combineReducers({
  // login: loginReducer,
  // session: sessionReducer,
  authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
