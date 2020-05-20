import { Error } from "./Error";
import { User } from "./User";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const CHECK_LOGGED_IN_REQUEST = "CHECK_LOGGED_IN_REQUEST";
export const CHECK_LOGGED_IN_FAILURE = "CHECK_LOGGED_IN_FAILURE";
export const CHECK_LOGGED_IN_SUCCESS = "CHECK_LOGGED_IN_SUCCESS";

export interface AuthenticationState {
  isFetching: boolean;
  user?: User;
  errors: Error[];
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  isFetching: boolean;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  isFetching: boolean;
  user: User;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  isFetching: boolean;
}

export interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
  isFetching: boolean;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
  isFetching: boolean;
}

export interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
  isFetching: boolean;
}

export interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
  isFetching: boolean;
}

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  isFetching: boolean;
  user: User;
}

export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  isFetching: boolean;
}

export interface CheckLoggedInRequestAction {
  type: typeof CHECK_LOGGED_IN_REQUEST;
  isFetching: boolean;
}

export interface CheckLoggedInSuccesstAction {
  type: typeof CHECK_LOGGED_IN_SUCCESS;
  isFetching: boolean;
  user?: User;
}

export interface CheckLoggedInFailureAction {
  type: typeof CHECK_LOGGED_IN_FAILURE;
  isFetching: boolean;
}

export type AuthenticationActionTypes =
  | RegisterFailureAction
  | RegisterSuccessAction
  | RegisterRequestAction
  | LoginFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LogoutFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | CheckLoggedInFailureAction
  | CheckLoggedInRequestAction
  | CheckLoggedInSuccesstAction;
