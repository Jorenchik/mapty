import React from "react";
import Workout from "../Workout";

// Styles
import { Wrapper, Content } from "./Workouts.styles";

// Components

const Workouts = () => (
  <Wrapper>
    <Content>
      <ul className="workouts">
        <Workout />
        <Workout />
      </ul>
    </Content>
  </Wrapper>
);

export default Workouts;
