import React from "react";
import Workout from "../Workout";

// Styles
import { Wrapper, Content } from "./Workouts.styles";

// Components

const Workouts = () => (
  <ul className="workouts">
    <Workout />
    <Workout />
  </ul>
);

export default Workouts;
