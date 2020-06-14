import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, signUpUser } from "../../../api/users";
import { loginUser, isUserLoggedIn } from "../../../api/sessions";
import { AppThunk } from "../../../app/store";

interface AuthenticationState {
  isFetching: boolean;
  user?: User;
  error: Error | null;
}

const initialState: AuthenticationState = {
  isFetching: false,
  user: undefined,
  error: null,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isFetching = true;
      state.user = undefined;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
      };
      state.isFetching = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<Error>) {
      state.user = undefined;
      state.isFetching = false;
      state.error = action.payload;
    },
    sessionRequest(state) {
      state.isFetching = true;
      state.user = undefined;
    },
    sessionFailure(state, action: PayloadAction<Error>) {
      state.isFetching = false;
      state.user = undefined;
    },
    sessionSuccess(state, action: PayloadAction<User>) {
      state.user = {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
      };
      state.isFetching = false;
      state.error = null;
    },
    signUpRequest(state) {
      state.isFetching = true;
    },
    signUpSuccess(state, action: PayloadAction<User>) {
      state.isFetching = false;
      state.user = action.payload;
      state.error = null;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.user = undefined;
      state.isFetching = false;
    },
    logoutRequest(state) {},
    logoutFailure(state) {},
    logoutSuccess(state) {},
  },
});

export const {
  loginRequest,
  loginFailure,
  loginSuccess,
  sessionFailure,
  sessionRequest,
  sessionSuccess,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
  logoutRequest,
  logoutFailure,
  logoutSuccess,
} = authenticateSlice.actions;

export default authenticateSlice.reducer;

export const login = ({
  email,
  password,
  isRemembered,
}: {
  email: string;
  password: string;
  isRemembered: boolean;
}): AppThunk => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await loginUser(email, password, isRemembered);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const isLoggedIn = (): AppThunk => async (dispatch) => {
  dispatch(sessionRequest());
  try {
    const user = await isUserLoggedIn();
    dispatch(sessionSuccess(user));
  } catch (error) {
    dispatch(sessionFailure(error));
  }
};

export const signup = ({
  firstname,
  lastname,
  email,
  password,
}: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}): AppThunk => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const user = await signUpUser(firstname, lastname, email, password);
    console.log("signup success!");
    dispatch(signUpSuccess(user));
  } catch (error) {
    dispatch(signUpFailure(error));
  }
};

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};
