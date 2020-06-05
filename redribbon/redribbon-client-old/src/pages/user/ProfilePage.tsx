import React, { SyntheticEvent, useState } from "react";
import { connect, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouteComponentProps } from "react-router-dom";
import { AppState } from "../../redux/store/store";
import { AppActions } from "../../types/AppActionTypes";
import { User } from "../../types/User";
import ProfileForm from "./ProfileForm";

// type Props = ProfilePageProps & IMapDispatchToProps & IMapStateToProps;

interface RootState {
  user: User;
}

const ProfilePage = () => {
  const { firstname, lastname } = useSelector((state: RootState) => state.user);

  const [editState, setEditState] = useState({
    firstname,
    lastname,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const handleOnSubmit = (event: SyntheticEvent) => {};

  return (
    <React.Fragment>
      <h1>Profile Page</h1>
      <ProfileForm
        firstname={editState.firstname}
        lastname={editState.lastname}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
    </React.Fragment>
  );
};

export default ProfilePage;
