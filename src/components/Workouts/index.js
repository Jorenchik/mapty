import React from "react";
import PropTypes from "prop-types";

// Styles
import { Content } from "./Workouts.styles";

// Components
import Form from "../Form";
import Workout from "../Workout";

// Helpers
import { sortWorkouts } from "../../helpers";

const Workouts = ({
  formVisible,
  submittedWorkoutInfo,
  handleFormSubmit,
  setSubmittedWorkoutInfo,
  workouts,
  sortingDesc,
  handleWorkoutElementClick,
  handleWorkoutEdit,
  handleWorkoutDelete,
}) => {
  return (
    <Content>
      <ul className="workouts">
        <Form
          visibility={formVisible}
          handleFormSubmit={handleFormSubmit}
          submittedWorkoutInfo={submittedWorkoutInfo}
          setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        />
        {sortWorkouts(workouts, sortingDesc ? "desc" : "asc")?.map(
          (workout) => (
            <Workout
              id={workout.id}
              date={workout.date}
              key={workout.id}
              position={workout.latlng}
              distance={workout.distance}
              duration={workout.duration}
              cadence={workout.cadence}
              type={workout.type}
              elevation={workout.elevation}
              handleWorkoutElementClick={handleWorkoutElementClick}
              handleWorkoutEdit={handleWorkoutEdit}
              handleWorkoutDelete={handleWorkoutDelete}
            />
          )
        )}
      </ul>
    </Content>
  );
};

Workouts.propTypes = {
  formVisible: PropTypes.bool,
  submittedWorkoutInfo: PropTypes.object,
  handleFormSubmit: PropTypes.func,
  setSubmittedWorkoutInfo: PropTypes.func,
  workouts: PropTypes.array,
  sortingDesc: PropTypes.bool,
  handleWorkoutEdit: PropTypes.func,
  handleWorkoutElementClick: PropTypes.func,
  handleWorkoutDelete: PropTypes.func,
};

export default Workouts;
