import React from "react";
import { User } from "../api/users";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";

const LoggedIn = ({ email }: { email: string }) => {
  return (
    <>
      {email} | <Link to="/profile">Profile</Link> |
      <Link to="/settings">Settings</Link> | <button>Logout</button>
    </>
  );
};

interface HeaderProps extends RouteComponentProps {
  user?: User;
}

const NotLoggedIn: React.FC = () => (
  <>
    <Link to="/signup">Sign up</Link>
    <Link to="/login">Log in</Link>
  </>
);

interface HeaderProps extends RouteComponentProps {
  user?: User;
}

const Header = ({ user, location, history }: HeaderProps) => {
  return (
    <>
      {user !== undefined ? <LoggedIn email={user.email} /> : <NotLoggedIn />}
    </>
  );
};

export default withRouter(Header);
