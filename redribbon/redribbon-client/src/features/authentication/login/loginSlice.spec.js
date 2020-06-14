import login, { loginFailure, loginRequest, loginSuccess } from "./loginSlice";

describe("login reducer", () => {
  const initialState = {
    isFetching: false,
    user: undefined,
  };

  it("should handle initial state", () => {
    expect(login(initialState, {})).toEqual({
      isFetching: false,
      user: undefined,
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(login(initialState, { type: loginRequest.type })).toEqual({
      isFetching: true,
      user: undefined,
    });
  });

  it("should handle LOGIN_SUCCESS", () => {});
  it("should handle LOGIN_FAILURE", () => {});
});
