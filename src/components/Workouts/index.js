import React from "react";
import Form from "../Form";
import Workout from "../Workout";

// Styles
import { Content } from "./Workouts.styles";

// Components

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
          />
        ))}
      </ul>
    </Content>
  );
};

export default Workouts;
