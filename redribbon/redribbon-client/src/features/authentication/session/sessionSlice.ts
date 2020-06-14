import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../api/users";

interface SessionState {
  isFetching: boolean;
  user?: User;
}

const initialState: SessionState = {
  isFetching: false,
  user: undefined,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    sessionRequest(state, action: PayloadAction<SessionState>) {
      state.isFetching = true;
      state.user = undefined;
    },
    sessionFailure(state, action: PayloadAction<SessionState>) {
      state.isFetching = false;
      state.user = undefined;
    },
    sessionSuccess(state, action: PayloadAction<SessionState>) {
      const { user } = action.payload;
      state.isFetching = false;
      state.user = user;
    },
  },
});

export const {
  sessionRequest,
  sessionFailure,
  sessionSuccess,
} = sessionSlice.actions;

export default sessionSlice.reducer;
