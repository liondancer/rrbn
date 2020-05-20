import React from "react";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";
import { User } from "../types/User";

const LoggedIn = ({ email }: { email: string }) => {
  return (
    <React.Fragment>
      {email}
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </React.Fragment>
  );
};

const NotLoggedIn = () => (
  <React.Fragment>
    <Link to="/signup">Sign up</Link>
    <Link to="/login">Log in</Link>
  </React.Fragment>
);

interface HeaderProps extends RouteComponentProps {
  user?: User;
}

const Header = ({ user, location }: HeaderProps) => {
  if (location.pathname !== "/login" && location.pathname !== "/signup") {
    return (
      <React.Fragment>
        {user !== undefined ? <LoggedIn email={user.email} /> : <NotLoggedIn />}
      </React.Fragment>
    );
  }
  return null;
};

export default withRouter(Header);
