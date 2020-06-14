import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import Header from "../components/Header";
import HomePage from "../pages/home/HomePage";
import "./App.css";
import { RootState } from "./rootReducer";
import AuthenticationPage from "../pages/authentication/AuthenticationPage";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user, isFetching } = useSelector(
    (state: RootState) => state.authentication
  );

  return (
    <React.Fragment>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/(login|signup)" component={AuthenticationPage} />
        {/*<Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route component={PageNotFound} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default App;
