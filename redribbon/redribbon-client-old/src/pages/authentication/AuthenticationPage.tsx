import React, { SyntheticEvent, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import LostPasswordForm from "./LostPasswordForm";
import RegistrationForm from "./RegistrationForm";
import { AppState } from "../../redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/AppActionTypes";
import { login, register } from "../../redux/actions/authentication";
import { AuthenticationActionTypes } from "../../types/Authentication";
import { bindActionCreators } from "redux";
import { User } from "../../types/User";
import { RouteComponentProps, Redirect } from "react-router-dom";

interface AuthenticationPageProps extends RouteComponentProps {
  // location: { state: string };
}

interface AuthenticationPageState {
  email: string;
  password: string;
  passwordConfirmation: string;
  errors: string;
}

// type Props = AuthenticationPageProps & IMapDispatchToProps & IMapStateToProps;
// type Dispatch = ThunkDispatch<any, any, AppActions>;

interface RootState extends RouteComponentProps {
  isFetching: boolean;
  user?: User;
  // login: (email: string, password: string, isRemembered: boolean) => void;
}

const AuthenticationPage = () => {
  // const [authenticationState, setAuthenticationState] = useState(
  //   props.location.state
  // );

  const dispatch = useDispatch();

  const props = useSelector((state: RootState) => ({
    isFetching: state.isFetching,
    user: state.user,
    location: state.location,
    history: state.history,
  }));

  const [lostPasswordState, setLostPasswordState] = useState("");
  const [registerState, setRegisterState] = useState({
    email: "",
    password: "",
    firstnamae: "",
    lastname: "",
    passwordConfirmation: "",
  });
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    isRemembered: true,
  });

  const handleLostPasswordSubmit = (event: SyntheticEvent) => {
    console.log("Lost Password Form submitted");
    event.preventDefault();
  };

  const handleLoginSubmit = (event: SyntheticEvent) => {
    console.log("Login Form submitted");
    event.preventDefault();
    dispatch(
      login(loginState.email, loginState.password, loginState.isRemembered)
    );
    if (props.user !== undefined) {
      props.history.push("/");
    }
  };

  const handleRegistrationSubmit = (event: SyntheticEvent) => {
    console.log("Registration Form submitted");
    event.preventDefault();
    dispatch(
      register(
        registerState.email,
        registerState.firstnamae,
        registerState.lastname,
        registerState.password,
        registerState.passwordConfirmation
      )
    );
  };

  const handleLoginOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState((prevState) => ({
      ...prevState,
      [name]: name === "isRemembered" ? !prevState.isRemembered : value,
    }));
  };

  const handleLostPasswordOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });
  };

  const handleRegisterOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterState({
      ...registerState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <React.Fragment>
      {props.user ? (
        <Redirect to="/" />
      ) : (
        <div>
          {props.location.pathname === "/login" && (
            <LoginForm
              onSubmit={handleLoginSubmit}
              onChange={handleLoginOnChange}
            />
          )}
          {props.location.pathname === "/signup" && (
            <RegistrationForm
              onSubmit={handleRegistrationSubmit}
              onChange={handleRegisterOnChange}
            />
          )}
          {/* {props.location.state === "lostPassword" && (
          <LostPasswordForm
            onSubmit={handleLostPasswordSubmit}
            onChange={handleLostPasswordOnChange}
          />
        )} */}
          {JSON.stringify(props.user)}
        </div>
      )}
    </React.Fragment>
  );
};

interface IMapStateToProps {
  isFetching: boolean;
  user?: User;
}

interface IMapDispatchToProps {
  login: (email: string, password: string, isRemembered: boolean) => void;
  register: (
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    passwordConfirmation: string
  ) => void;
  // lostpassword: () => void;
}

// const mapStateToProps = (
//   state: AppState,
//   ownProps: AuthenticationPageProps
// ): IMapStateToProps => ({
//   isFetching: state.authentication.isFetching,
//   user: state.authentication.user,
// });
// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, AppActions>,
//   ownProps: AuthenticationPageProps
// ): IMapDispatchToProps => ({
//   login: bindActionCreators(login, dispatch),
//   register: bindActionCreators(register, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationPage);
export default AuthenticationPage;
