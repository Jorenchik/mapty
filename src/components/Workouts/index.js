import React from "react";

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

export default Workouts;
