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
  sortingDesc,
  setSortingDesc,
}) => {
  return (
    <>
      <Content>
        <Logo />
        <Overline sortingDesc={sortingDesc} setSortingDesc={setSortingDesc} />
        <Workouts
          workouts={workouts}
          handleFormSubmit={handleFormSubmit}
          formVisible={formVisible}
          setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
          submittedWorkoutInfo={submittedWorkoutInfo}
          sortingDesc={sortingDesc}
        />
        <Copyright />
      </Content>
    </>
  );
};

SideBar.propTypes = {
  formVisible: PropTypes.bool,
  submittedWorkoutInfo: PropTypes.object,
  handleFormSubmit: PropTypes.func,
  setSubmittedWorkoutInfo: PropTypes.func,
  workouts: PropTypes.array,
  sortingDesc: PropTypes.bool,
  setSortingDesc: PropTypes.func,
};

export default SideBar;
