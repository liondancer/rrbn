import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouteComponentProps } from "react-router-dom";
import { AppState } from "../../redux/store/store";
import { AppActions } from "../../types/AppActionTypes";
import { User } from "../../types/User";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <h1>Profile Page</h1>
      <ProfileForm firstname="test" lastname="test last" />
    </React.Fragment>
  );
};

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
