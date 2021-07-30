import React from "react";

// Styles
import { Wrapper, Content } from "./Workout.styles";

const Workout = () => (
  <Wrapper>
    <Content>
      <li className="workout workout--cycling">
        <h2 className="workout__title">Cycling on April 5</h2>
        <div className="workout__details">
          <span className="workout__icon">🚴‍♀️</span>
          <span className="workout__value">27</span>
          <span className="workout__unit">km</span>
        </div>
        <div className="workout__details">
          <span className="workout__icon">⏱</span>
          <span className="workout__value">95</span>
          <span className="workout__unit">min</span>
        </div>
        <div className="workout__details">
          <span className="workout__icon">⚡️</span>
          <span className="workout__value">16</span>
          <span className="workout__unit">km/h</span>
        </div>
        <div className="workout__details">
          <span className="workout__icon">⛰</span>
          <span className="workout__value">223</span>
          <span className="workout__unit">m</span>
        </div>
      </li>
    </Content>
  </Wrapper>
);

export default Workout;
