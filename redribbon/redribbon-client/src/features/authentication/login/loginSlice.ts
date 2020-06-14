import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../api/users";
import { loginUser } from "../../../api/sessions";
import { AppThunk } from "../../../app/store";

interface LoginState {
  isFetching: boolean;
  user?: User;
  error: Error | null;
}

const initialState: LoginState = {
  isFetching: false,
  user: undefined,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
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
  },
});

export const { loginRequest, loginFailure, loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;

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
