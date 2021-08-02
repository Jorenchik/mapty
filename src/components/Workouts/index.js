import React from "react";
import PropTypes from "prop-types";

// Styles
import { Content } from "./Workouts.styles";

// Components
import Form from "../Form";
import Workout from "../Workout";

const Workouts = ({
  formVisible,
  submittedWorkoutInfo,
  handleFormSubmit,
  setSubmittedWorkoutInfo,
  workouts,
  sortingDesc,
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
        {workouts?.map((workout) => (
          <Workout
            date={workout.date}
            key={workout.id}
            distance={workout.distance}
            duration={workout.duration}
            cadence={workout.cadence}
            type={workout.type}
            elevation={workout.elevation}
          />
        ))}
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
};

export default Workouts;
