import { Dispatch } from "redux";
import { User } from "../../types/User";
import {
  AuthenticationActionTypes,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CHECK_LOGGED_IN_FAILURE,
  CHECK_LOGGED_IN_REQUEST,
  CHECK_LOGGED_IN_SUCCESS,
} from "../../types/Authentication";

import axios from "axios";
import { AppState } from "../store/store";

const loginRequest = (): AuthenticationActionTypes => ({
  type: LOGIN_REQUEST,
  isFetching: true,
});

const loginFailure = (): AuthenticationActionTypes => ({
  type: LOGIN_FAILURE,
  isFetching: false,
});

const loginSuccess = ({ user }: { user: User }): AuthenticationActionTypes => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  user: {
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  },
});

const logoutRequest = (): AuthenticationActionTypes => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
});

const logoutSuccess = (): AuthenticationActionTypes => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
});

const logoutFailure = (): AuthenticationActionTypes => ({
  type: LOGOUT_FAILURE,
  isFetching: false,
});

const registerRequest = (): AuthenticationActionTypes => ({
  type: REGISTER_REQUEST,
  isFetching: true,
});
const registerFailure = (): AuthenticationActionTypes => ({
  type: REGISTER_FAILURE,
  isFetching: false,
});
const registerSuccess = ({
  user,
}: {
  user: User;
}): AuthenticationActionTypes => ({
  type: REGISTER_SUCCESS,
  isFetching: false,
  user: {
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  },
});

const checkLoggedInRequest = (): AuthenticationActionTypes => ({
  type: CHECK_LOGGED_IN_REQUEST,
  isFetching: true,
});

const checkLoggedInSuccess = ({
  user,
}: {
  user?: User;
}): AuthenticationActionTypes => {
  if (user === undefined) {
    console.log("No user in cookie");
    return {
      type: CHECK_LOGGED_IN_SUCCESS,
      isFetching: false,
    };
  } else {
    console.log("User in cookie!");
    return {
      type: CHECK_LOGGED_IN_SUCCESS,
      isFetching: false,
      user: {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    };
  }
};

const checkLoggedInFailure = (): AuthenticationActionTypes => ({
  type: CHECK_LOGGED_IN_FAILURE,
  isFetching: false,
});

export const register = (
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  passwordConfirmation: string
) => {
  return (
    dispatch: Dispatch<AuthenticationActionTypes>,
    getState: () => AppState
  ) => {
    dispatch(registerRequest());
    axios
      .post(
        "http://localhost:3001/users/",
        {
          user: {
            email,
            firstname,
            lastname,
            password,
            password_confirmation: passwordConfirmation,
          },
        },
        {
          withCredentials: true, // Tells API it is OK to set cookie in Client
        }
      )
      .then((response) => {
        console.log("Registration response", response);
        dispatch(registerSuccess(response.data));
      })
      .catch((error) => {
        console.log("Registration Error", error);
        dispatch(registerFailure());
      });
  };
};

export const login = (
  email: string,
  password: string,
  isRemembered: boolean
) => {
  return (
    dispatch: Dispatch<AuthenticationActionTypes>,
    getState: () => AppState
  ) => {
    dispatch(loginRequest());
    axios
      .post(
        "http://localhost:3001/login/",
        {
          user: {
            email,
            password,
          },
          isRemembered,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("Login success response", response);
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.log("Login failure response", error);

        dispatch(loginFailure());
      });
  };
};

export const logout = () => {
  return (
    dispatch: Dispatch<AuthenticationActionTypes>,
    getState: () => AppState
  ) => {
    dispatch(loginRequest());
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        console.log("Logout success", response.data);
        dispatch(logoutSuccess());
      })
      .catch((error) => {});
  };
};

export const checkLoggedIn = () => {
  return (
    dispatch: Dispatch<AuthenticationActionTypes>,
    getState: () => AppState
  ) => {
    dispatch(checkLoggedInRequest());
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        console.log("Check Logged in", response);
        dispatch(checkLoggedInSuccess(response.data));
      })
      .catch((error) => {
        console.log("check logged in error", error);
        dispatch(checkLoggedInFailure());
      });
  };
};
