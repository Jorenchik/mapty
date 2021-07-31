import React from "react";
import Form from "../Form";
import Workout from "../Workout";

// Styles
import { Content } from "./Workouts.styles";

// Components

const Workouts = ({
  formVisible,
  setIsFormSubmitted,
  setSubmittedWorkoutInfo,
  submittedWorkoutInfo,
}) => {
  return (
    <Content>
      <ul className="workouts">
        <Form
          visibility={formVisible}
          setIsFormSubmitted={setIsFormSubmitted}
          setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
          submittedWorkoutInfo={submittedWorkoutInfo}
        />
        <Workout />
        <Workout />
      </ul>
    </Content>
  );
};

export default Workouts;
