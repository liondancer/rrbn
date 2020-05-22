import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import SettingsPage from "./pages/user/SettingsPage";
import { AppState } from "./redux/store/store";

import PageNotFound from "./pages/error/PageNotFound";
import { connect } from "react-redux";
import { AuthenticationActionTypes } from "./types/Authentication";
import { ThunkDispatch } from "redux-thunk";

import "./App.css";
import AuthenticationPage from "./pages/authentication/AuthenticationPage";
import Header from "./components/Header";
import { AppActions } from "./types/AppActionTypes";
import { User } from "./types/User";
import { checkLoggedIn, logout } from "./redux/actions/authentication";
import { bindActionCreators } from "redux";
import ProfilePage from "./pages/user/ProfilePage";

interface AppProps {}

interface RedRibbonAppState {}

type Props = AppProps & IMapDispatchToProps & IMapStateToProps;

const App = (props: Props) => {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    if (props.user === undefined) {
      props.checkLoggedIn();
    }
  });

  console.log("APP", window.location.pathname);

  return (
    <React.Fragment>
      <Header user={props.user} logout={props.logout} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/(login|signup)" component={AuthenticationPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
};

interface IMapStateToProps {
  user?: User;
}
interface IMapDispatchToProps {
  checkLoggedIn: () => void;
  logout: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AppProps
): IMapStateToProps => ({
  user: state.authentication.user,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AuthenticationActionTypes>,
  ownProps: AppProps
): IMapDispatchToProps => ({
  checkLoggedIn: bindActionCreators(checkLoggedIn, dispatch),
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
