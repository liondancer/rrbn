import {
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  AuthenticationState,
  AuthenticationActionTypes,
  CHECK_LOGGED_IN_REQUEST,
  CHECK_LOGGED_IN_SUCCESS,
  CHECK_LOGGED_IN_FAILURE,
} from "../../types/Authentication";

// import { User } from "../../types/User";

export const AuthenticationReducerDefaultState = Object.freeze<
  AuthenticationState
>({
  errors: [],
  isFetching: false,
  user: undefined,
});

export const authenticationReducer = (
  state = AuthenticationReducerDefaultState,
  action: AuthenticationActionTypes
): AuthenticationState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case REGISTER_REQUEST:
    case CHECK_LOGGED_IN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case LOGOUT_SUCCESS:
      return { ...state, isFetching: false, user: undefined };
    case CHECK_LOGGED_IN_SUCCESS:
      return { ...state, isFetching: false, user: action.user };
    case REGISTER_SUCCESS:
      return { ...state, isFetching: false, user: action.user };
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, user: undefined };
    case LOGOUT_FAILURE:
      return { ...state, isFetching: false, user: undefined };
    case REGISTER_FAILURE:
      return { ...state, isFetching: false, user: undefined };
    case CHECK_LOGGED_IN_FAILURE:
      return { ...state, isFetching: false, user: undefined };
    default:
      return state;
  }
};
