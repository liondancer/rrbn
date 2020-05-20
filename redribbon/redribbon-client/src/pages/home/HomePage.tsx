import React from "react";
import LandingPage from "./LandingPage";
import { ThunkDispatch } from "redux-thunk";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../redux/store/store";
import { AppActions } from "../../types/AppActionTypes";
import { User } from "../../types/User";

// import './homepage.styles.scss';

interface HomePageProps extends RouteComponentProps {}

interface HomePageState {}

type Props = HomePageProps & IMapDispatchToProps & IMapStateToProps;
const HomePage = (props: Props) => {
  return (
    <div className="homepage">
      {props.user === undefined ? (
        <LandingPage />
      ) : (
        <React.Fragment>{JSON.stringify(props.user)}</React.Fragment>
      )}
    </div>
  );
};

interface IMapStateToProps {
  user?: User;
}
interface IMapDispatchToProps {
  // checkLoggedIn: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): IMapStateToProps => ({
  user: state.authentication.user,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): IMapDispatchToProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
