import React from "react";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";
import { useEffect, useState } from "react";
import { useFetchGeocodes } from "./useFetchGeocodes";

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
  const [sortingDesc, setSortingDesc] = useState(true);
  const [error, setError] = useState("");
  const [submissionType, setSubmissionType] = useState("");
  const [selectedWorkoutId, setSelectedWorkoutId] = useState();
  const [isShowAllClicked, setIsShowAllClicked] = useState(false);
  const [workoutGeocodes, setWorkoutGeocodes] = useState([]);
  // Initial state to run fetch workouts from local storage only once
  const [initialState, setInitialState] = useState(true);

  // Get workout locations
  useFetchGeocodes(workouts, setWorkoutGeocodes);

  // Adding a workout object to state
  const addWorkoutToState = (workout) => {
    setWorkouts([
      ...workouts,
      {
        date: workout.date.toString(),
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
    // Resetting the error
    setError("");

    // Generating random id
    const id = Math.trunc(Math.random() * 10000);

    // Fetching common wokrout values
    const type = submittedWorkoutInfo.type;
    const distance = +submittedWorkoutInfo.distance;
    const duration = +submittedWorkoutInfo.duration;

    // Fetching more precise values
    const cadence = +submittedWorkoutInfo.cadence;
    const elevation = +submittedWorkoutInfo.elevation;

    if (
      isNaN(distance) ||
      isNaN(duration) ||
      isNaN(cadence) ||
      isNaN(elevation)
    ) {
      return setError("Enter valid numbers.");
    }

    // Validating common values
    if (!distance || !duration || !type) {
      return setError("Values must be greater than zero.");
    }
    if (duration <= 0 && distance <= 0) {
      return setError("Values must be greater than zero.");
    }

    if (type === "running" && !cadence) {
      return setError("Values must be greater than zero.");
    }

    if (type === "cycling" && !elevation) {
      return setError("Values must be greater than zero.");
    }

    // User is trying to add workout
    if (submissionType === "add") {
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
    }

    // User is trying to edit workout
    if (submissionType === "edit") {
      const selectedWorkout = findWokroutById(selectedWorkoutId);
      const newWorkouts = workouts.map((workout) => {
        if (workout.id === selectedWorkout.id) {
          return {
            date: selectedWorkout.date,
            id: selectedWorkout.id,
            latlng: selectedWorkout.latlng,
            type,
            duration,
            distance,
            cadence,
            elevation,
          };
        } else {
          return workout;
        }
      });

      // Update workouts state
      setWorkouts(newWorkouts);
    }

    // Resetting the workout adding form
    setError("");
    setChoosedLocation(null);
    setSubmittedWorkoutInfo(initialWorkoutInfo);
    // Resetting subbmision type
    setSubmissionType("");
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

  // Handle deleteAll button from the overline
  const handleDeleteAll = () => {
    setWorkouts([]);
    window.localStorage.removeItem("workouts");
  };

  // Handle edit button from workout list element
  const handleWorkoutEdit = (workoutId) => {
    setSelectedWorkoutId(workoutId);
    const selectedWorkout = findWokroutById(workoutId);
    if (!selectedWorkout) return;
    setSubmittedWorkoutInfo({
      type: selectedWorkout.type,
      duration: selectedWorkout.duration.toString(),
      distance: selectedWorkout.distance.toString(),
      cadence: selectedWorkout.cadence.toString(),
      elevation: selectedWorkout.elevation.toString(),
    });
    setSubmissionType("edit");
  };

  // Handle delete button from workout list element
  const handleWorkoutDelete = (workoutId) => {
    const selectedWorkout = findWokroutById(workoutId);
    if (!selectedWorkout) return;
    const newWorkouts = workouts.filter(
      (workout) => workout.id !== selectedWorkout.id
    );
    setWorkouts(newWorkouts);
  };

  // Get workout instance from state by its id
  const findWokroutById = (id) => {
    return workouts.find((workouts) => workouts.id === id);
  };

  // Handle click on sidebar list element
  const handleWorkoutElementClick = (position) => {
    const { lat: latitude, lng: longitude } = position;
    setLocation([latitude, longitude]);
  };

  // Handle click on showAll button
  const handleShowAllClick = () => {
    if (!isShowAllClicked) setIsShowAllClicked(true);
  };

  return (
    <Content>
      <SideBar
        handleFormSubmit={handleFormSubmit}
        formVisible={submissionType ? true : false}
        setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        submittedWorkoutInfo={submittedWorkoutInfo}
        workouts={workouts}
        sortingDesc={sortingDesc}
        setSortingDesc={setSortingDesc}
        handleDeleteAll={handleDeleteAll}
        handleWorkoutElementClick={handleWorkoutElementClick}
        handleWorkoutEdit={handleWorkoutEdit}
        handleWorkoutDelete={handleWorkoutDelete}
        handleShowAllClick={handleShowAllClick}
        error={error}
      />
      <Map
        setChoosedLocation={setChoosedLocation}
        setSubmissionType={setSubmissionType}
        setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        isShowAllClicked={isShowAllClicked}
        setIsShowAllClicked={setIsShowAllClicked}
        workouts={workouts}
        location={location}
      />
    </Content>
  );
};

export default App;
