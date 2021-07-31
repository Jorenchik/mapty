import React from "react";

// Styles
import { Content } from "./Form.styles";

const Form = ({
  visibility,
  handleFormSubmit,
  submittedWorkoutInfo,
  setSubmittedWorkoutInfo,
}) => {
  const handleTypeChange = (e) => {
    const newWorkoutInfo = {
      ...submittedWorkoutInfo,
      type: e.target.value,
      cadence: "0",
      elevation: "0",
    };
    setSubmittedWorkoutInfo(newWorkoutInfo);
  };

  const handleDistanceChange = (e) => {
    const newWorkoutInfo = {
      ...submittedWorkoutInfo,
      distance: e.target.value,
    };
    setSubmittedWorkoutInfo(newWorkoutInfo);
  };

  const handleDurationChange = (e) => {
    const newWorkoutInfo = {
      ...submittedWorkoutInfo,
      duration: e.target.value,
    };
    setSubmittedWorkoutInfo(newWorkoutInfo);
  };

  const handleCadenceChange = (e) => {
    const newWorkoutInfo = {
      ...submittedWorkoutInfo,
      cadence: e.target.value,
    };
    setSubmittedWorkoutInfo(newWorkoutInfo);
  };

  const handleElevationChange = (e) => {
    const newWorkoutInfo = {
      ...submittedWorkoutInfo,
      elevation: e.target.value,
    };
    setSubmittedWorkoutInfo(newWorkoutInfo);
  };

  return (
    <Content>
      <form
        onSubmit={handleFormSubmit}
        className={`form ${visibility ? "" : "hidden"}`}
      >
        <div className="form__row">
          <label className="form__label">Type</label>
          <select
            onChange={handleTypeChange}
            className="form__input form__input--type"
          >
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
          </select>
        </div>
        <div className="form__row">
          <label className="form__label">Distance</label>
          <input
            onChange={handleDistanceChange}
            className="form__input form__input--distance"
            placeholder="km"
            value={submittedWorkoutInfo.distance}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Duration</label>
          <input
            onChange={handleDurationChange}
            className="form__input form__input--duration"
            placeholder="min"
            value={submittedWorkoutInfo.duration}
          />
        </div>
        {submittedWorkoutInfo.type === "running" ? (
          <div className="form__row">
            <label className="form__label">Cadence</label>
            <input
              onChange={handleCadenceChange}
              className="form__input form__input--cadence"
              placeholder="steps/min"
              value={submittedWorkoutInfo.cadence}
            />
          </div>
        ) : (
          <div className="form__row">
            <label className="form__label">Elev Gain</label>
            <input
              onChange={handleElevationChange}
              className="form__input form__input--elevation"
              placeholder="meters"
              value={submittedWorkoutInfo.elevation}
            />
          </div>
        )}

        <button className="form__btn">OK</button>
      </form>
    </Content>
  );
};

export default Form;
