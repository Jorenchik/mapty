import React from "react";
import Form from "../Form";
import Workout from "../Workout";

// Styles
import { Content } from "./Workouts.styles";

// Components

const Workouts = ({ formVisible }) => (
  <Content>
    <ul className="workouts">
      <Form visibility={formVisible} />
      <Workout />
      <Workout />
    </ul>
  </Content>
);

export default Workouts;
