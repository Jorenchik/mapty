import React from "react";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";
import { useEffect, useState } from "react";

const App = () => {
  // Initial state values
  const initialWorkoutInfo = {
    type: "running",
    duration: "0",
    distance: "0",
    cadence: "0",
    elevation: "0",
  };

  // State
  const [choosedLocation, setChoosedLocation] = useState(null);
  const [submittedWorkoutInfo, setSubmittedWorkoutInfo] =
    useState(initialWorkoutInfo);
  const [workouts, setWorkouts] = useState([]);

  // Adding a workout object to state
  const addWorkoutToState = (workout) => {
    setWorkouts([
      ...workouts,
      {
        id: workout.id,
        latlng: workout.latlng,
        type: workout.type,
        duration: workout.duration,
        distance: workout.distance,
        cadence: workout.cadence,
        elevation: workout.elevation,
      },
    ]);
  };

  // Handling the form submission, adding a workout to list
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = Math.trunc(Math.random() * 10000);
    const type = submittedWorkoutInfo.type;
    const distance = +submittedWorkoutInfo.distance;
    const duration = +submittedWorkoutInfo.duration;

    if (!distance || !duration || !type) return;
    if (duration <= 0 && distance <= 0) return;

    const cadence = +submittedWorkoutInfo.cadence;
    const elevation = +submittedWorkoutInfo.cadence;

    if (
      isNaN(distance) ||
      isNaN(duration) ||
      isNaN(cadence) ||
      isNaN(elevation)
    )
      return;

    const newWorkout = {
      id,
      latlng: choosedLocation,
      type,
      duration,
      distance,
      cadence,
      elevation,
    };

    addWorkoutToState(newWorkout);
    setChoosedLocation(null);
    setSubmittedWorkoutInfo(initialWorkoutInfo);
  };

  // Local storage
  // eslint-disable-next-line
  const setWorkoutsToLocalStorage = (workouts) => {
    window.localStorage.setItem("workouts", JSON.stringify(workouts));
  };

  useEffect(() => {
    if (workouts.length === 0) return;
    setWorkoutsToLocalStorage(workouts);
  }, [setWorkoutsToLocalStorage, workouts]);

  // Initial state to run fetch workouts from local storage only once
  const [initialState, setInitialState] = useState(true);

  // Fetching workout data from local storage
  useEffect(() => {
    if (!initialState) return;
    const workouts = JSON.parse(window.localStorage.getItem("workouts"));
    if (workouts.length === 0) return;
    setWorkouts(workouts);
    setInitialState(false);
  }, [initialState]);

  return (
    <Content>
      <SideBar
        handleFormSubmit={handleFormSubmit}
        formVisible={choosedLocation ? true : false}
        setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        submittedWorkoutInfo={submittedWorkoutInfo}
        workouts={workouts}
      />
      <Map setChoosedLocation={setChoosedLocation} workouts={workouts} />
    </Content>
  );
};

export default App;
