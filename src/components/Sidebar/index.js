import React from "react";
import PropTypes from "prop-types";

// Styles
import { Content } from "./Sidebar.styles";

// Components
import Logo from "../Logo";
import Overline from "../Overline";
import Error from "../Error";
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
  handleDeleteAll,
  handleWorkoutElementClick,
  handleWorkoutEdit,
  handleWorkoutDelete,
  error,
}) => {
  return (
    <>
      <Content>
        <Logo />
        <Overline
          sortingDesc={sortingDesc}
          setSortingDesc={setSortingDesc}
          handleDeleteAll={handleDeleteAll}
        />
        {error !== "" ? <Error message={error} /> : ""}
        <Workouts
          workouts={workouts}
          handleFormSubmit={handleFormSubmit}
          formVisible={formVisible}
          setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
          submittedWorkoutInfo={submittedWorkoutInfo}
          sortingDesc={sortingDesc}
          handleWorkoutElementClick={handleWorkoutElementClick}
          handleWorkoutEdit={handleWorkoutEdit}
          handleWorkoutDelete={handleWorkoutDelete}
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
  handleDeleteAll: PropTypes.func,
  handleWorkoutElementClick: PropTypes.func,
  handleWorkoutEdit: PropTypes.func,
  handleWorkoutDelete: PropTypes.func,
  error: PropTypes.string,
};

export default SideBar;
