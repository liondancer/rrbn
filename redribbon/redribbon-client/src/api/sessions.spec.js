import { loginUser } from "./sessions";

describe("Login API", () => {
  it("should successfully login with good credentials", () => {
    expect(loginUser()).toEqual({
      firstname: "",
      lastname: "",
      email: "",
    });
  });
  it("should unsuccessfully login with bad credentials", () => {});
});
