import React from "react";
import PropTypes from "prop-types";

// Styles
import { Content } from "./Sidebar.styles";

// Components
import Logo from "../Logo";
import Overline from "../Overline";
import Workouts from "../Workouts";
import Copyright from "../Copyright";

const SideBar = ({
  formVisible,
  submittedWorkoutInfo,
  handleFormSubmit,
  setSubmittedWorkoutInfo,
  workouts,
}) => {
  return (
    <Content>
      <Logo />
      <Overline />
      <Workouts
        workouts={workouts}
        handleFormSubmit={handleFormSubmit}
        formVisible={formVisible}
        setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        submittedWorkoutInfo={submittedWorkoutInfo}
      />
      <Copyright />
    </Content>
  );
};

SideBar.propTypes = {
  formVisible: PropTypes.bool,
  submittedWorkoutInfo: PropTypes.object,
  handleFormSubmit: PropTypes.func,
  setSubmittedWorkoutInfo: PropTypes.func,
  workouts: PropTypes.array,
};

export default SideBar;
