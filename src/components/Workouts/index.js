import React from "react";
import Workout from "../Workout";

// Styles
import { Content } from "./Workouts.styles";

// Components

const Workouts = () => (
  <Content>
    <ul className="workouts">
      <Workout />
      <Workout />
    </ul>
  </Content>
);

export default Workouts;
