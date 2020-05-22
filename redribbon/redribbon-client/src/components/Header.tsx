import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";
import { User } from "../types/User";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/AppActionTypes";
// import { logout } from "../redux/actions/authentication";
import { bindActionCreators } from "redux";

const LoggedIn = ({
  email,
  onClickLogout,
}: {
  email: string;
  onClickLogout: any;
}) => {
  return (
    <React.Fragment>
      {email} |<Link to="/profile">Profile</Link> |
      <Link to="/settings">Settings</Link> |
      <button onClick={onClickLogout}>Logout</button>
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
  logout: () => void;
}

type Props = HeaderProps;

const Header = ({ user, location, history, logout }: HeaderProps) => {
  const onClickLogout = () => {
    logout();
    history.push("/");
  };

  if (location.pathname !== "/login" && location.pathname !== "/signup") {
    return (
      <React.Fragment>
        {user !== undefined ? (
          <LoggedIn email={user.email} onClickLogout={onClickLogout} />
        ) : (
          <NotLoggedIn />
        )}
      </React.Fragment>
    );
  }
  return null;
};

export default withRouter(Header);
