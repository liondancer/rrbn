import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logout",
  initialState: {},
  reducers: {
    logoutRequest() {},
    logoutSuccess() {},
    logoutFailure() {},
  },
});
