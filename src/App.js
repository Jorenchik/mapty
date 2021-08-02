import React from "react";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";
import { useEffect, useState } from "react";

const App = () => {
  // Initial form values
  const initialWorkoutInfo = {
    type: "running",
    duration: "0",
    distance: "0",
    cadence: "0",
    elevation: "0",
  };

  // Get users location or fallback to London location as default
  const getLocation = function (setLocaion) {
    if (!navigator.geolocation) return [51.505, -0.09];
    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;
      setLocation([latitude, longitude]);
    });
  };

  // State
  const [choosedLocation, setChoosedLocation] = useState(null);
  const [submittedWorkoutInfo, setSubmittedWorkoutInfo] =
    useState(initialWorkoutInfo);
  const [workouts, setWorkouts] = useState([]);
  const [location, setLocation] = useState([51.505, -0.09]);
  // Initial state to run fetch workouts from local storage only once
  const [initialState, setInitialState] = useState(true);

  // Adding a workout object to state
  const addWorkoutToState = (workout) => {
    setWorkouts([
      ...workouts,
      {
        date: workout.date,
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

    // Generating random id
    const id = Math.trunc(Math.random() * 10000);

    // Fetching common wokrout values
    const type = submittedWorkoutInfo.type;
    const distance = +submittedWorkoutInfo.distance;
    const duration = +submittedWorkoutInfo.duration;

    // Validating common values
    if (!distance || !duration || !type) return;
    if (duration <= 0 && distance <= 0) return;

    // Fetching more precise values
    const cadence = +submittedWorkoutInfo.cadence;
    const elevation = +submittedWorkoutInfo.elevation;

    // Checking whether values are numbers
    if (
      isNaN(distance) ||
      isNaN(duration) ||
      isNaN(cadence) ||
      isNaN(elevation)
    )
      return;

    // Computing new workout object
    const newWorkout = {
      date: new Date(),
      id,
      latlng: choosedLocation,
      type,
      duration,
      distance,
      cadence,
      elevation,
    };

    // Updating the state
    addWorkoutToState(newWorkout);

    // Resetting the workout adding form
    setChoosedLocation(null);
    setSubmittedWorkoutInfo(initialWorkoutInfo);
  };

  // Local storage
  // eslint-disable-next-line
  const setWorkoutsToLocalStorage = (workouts) => {
    window.localStorage.setItem("workouts", JSON.stringify(workouts));
  };

  // Saving workouts to local storage each time they've been updated
  useEffect(() => {
    if (!workouts || workouts.length === 0) return;
    setWorkoutsToLocalStorage(workouts);
  }, [setWorkoutsToLocalStorage, workouts]);

  // Fetching workout data from local storage and getting location
  useEffect(() => {
    if (!initialState) return;
    getLocation(setLocation);
    const workouts = JSON.parse(window.localStorage.getItem("workouts"));
    if (!workouts || workouts.length === 0) return;
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
      <Map
        setChoosedLocation={setChoosedLocation}
        workouts={workouts}
        location={location}
      />
    </Content>
  );
};

export default App;
