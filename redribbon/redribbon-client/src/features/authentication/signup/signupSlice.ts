import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, signUpUser } from "../../../api/users";
import { AppThunk } from "../../../app/store";

interface LoginState {
  isFetching: boolean;
  user?: User;
  error: string | null;
}

const initialState: LoginState = {
  isFetching: false,
  user: undefined,
  error: null,
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
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
      state.error = action.payload;
    },
  },
});

export const {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} = signUpSlice.actions;

export default signUpSlice.reducer;

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
