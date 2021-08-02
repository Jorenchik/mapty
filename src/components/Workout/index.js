import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content } from "./Workout.styles";

// Helpers
import { getHumanReadableDate } from "../../helpers";

const Workout = ({ date, type, distance, duration, cadence, elevation }) => {
  const dateObj = new Date(date);
  return (
    <Wrapper>
      <Content>
        <li
          className={`workout workout--${
            type === "running" ? "running" : "cycling"
          }`}
        >
          <h2 className="workout__title">{`${type[0].toUpperCase()}${type.slice(
            1
          )} on ${getHumanReadableDate(dateObj)}`}</h2>
          <div className="workout__details">
            <span className="workout__icon">
              {type === "running" ? "🏃‍♂️" : "🚴‍♀️"}
            </span>
            <span className="workout__value">{distance}</span>
            <span className="workout__unit">km</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⏱</span>
            <span className="workout__value">{duration}</span>
            <span className="workout__unit">min</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⚡️</span>
            <span className="workout__value">
              {(distance / duration).toFixed(2)}
            </span>
            <span className="workout__unit">km/h</span>
          </div>
          {type === "running" ? (
            <div className="workout__details">
              <span className="workout__icon">🦶🏼</span>
              <span className="workout__value">{cadence}</span>
              <span className="workout__unit">spm</span>
            </div>
          ) : (
            <div className="workout__details">
              <span className="workout__icon">⛰</span>
              <span className="workout__value">{elevation}</span>
              <span className="workout__unit">m</span>
            </div>
          )}
        </li>
      </Content>
    </Wrapper>
  );
};

Workout.propTypes = {
  date: PropTypes.string,
  type: PropTypes.string,
  distance: PropTypes.number,
  duration: PropTypes.number,
  cadence: PropTypes.number,
  elevation: PropTypes.number,
};

export default Workout;
