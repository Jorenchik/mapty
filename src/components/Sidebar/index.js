import React from "react";
import PropTypes from "prop-types";

// Styles
import { Content } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Copyright from "../Copyright";
import Logo from "../Logo";

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
