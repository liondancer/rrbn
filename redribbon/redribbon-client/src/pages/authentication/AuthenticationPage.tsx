import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {
  login,
  signup,
  isLoggedIn,
} from "../../features/authentication/authenticate/authenticateSlice";

interface Props extends RouteComponentProps {}

const AuthenticationPage = (props: Props) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => ({
    user: state.authentication.user,
  }));

  const [signUpState, setSignUpState] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    passwordConfirmation: "",
  });
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    isRemembered: true,
  });

  const handleLoginOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState((prevState) => ({
      ...prevState,
      [name]: name === "isRemembered" ? !prevState.isRemembered : value,
    }));
  };

  const handleSignUpOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({
      ...signUpState,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSubmit = (event: SyntheticEvent) => {
    console.log("Login Form submitted");
    event.preventDefault();
    dispatch(login({ ...loginState }));
  };

  const handleSignUpSubmit = (event: SyntheticEvent) => {
    console.log("SignUp Form submitted");
    event.preventDefault();
    dispatch(
      signup({
        firstname: signUpState.firstname,
        lastname: signUpState.lastname,
        email: signUpState.email,
        password: signUpState.password,
      })
    );
  };

  // if (user !== undefined) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      {user !== undefined ? (
        <Redirect to="/" />
      ) : (
        <>
          {props.location.pathname === "/login" && (
            <LoginForm
              onSubmit={handleLoginSubmit}
              onChange={handleLoginOnChange}
            />
          )}
          {props.location.pathname === "/signup" && (
            <SignUpForm
              onSubmit={handleSignUpSubmit}
              onChange={handleSignUpOnChange}
            />
          )}
        </>
      )}
    </>
  );
};
export default withRouter(AuthenticationPage);
