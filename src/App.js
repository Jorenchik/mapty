import React from "react";

import "./App.css";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";
import { useEffect, useState } from "react";

const App = () => {
  const initialWorkoutInfo = {
    type: "running",
    duration: "0",
    distance: "0",
    cadence: "0",
    elevation: "0",
  };
  const [choosedLocation, setChoosedLocation] = useState(null);
  const [submittedWorkoutInfo, setSubmittedWorkoutInfo] =
    useState(initialWorkoutInfo);
  const [workouts, setWorkouts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = Math.trunc(Math.random() * 10000);
    const type = submittedWorkoutInfo.type;
    const distance = +submittedWorkoutInfo.distance;
    const duration = +submittedWorkoutInfo.duration;
    if (!distance || !duration || !type) return;

    if (type === "running" && duration > 0 && distance > 0) {
      const cadence = +submittedWorkoutInfo.cadence;
      if (!cadence) return;
      setWorkouts([
        ...workouts,
        { id, latlng: choosedLocation, type, duration, cadence, distance },
      ]);
      setChoosedLocation(null);
      setSubmittedWorkoutInfo(initialWorkoutInfo);
    } else {
      const elevation = +submittedWorkoutInfo.elevation;
      if (!elevation) return;
      setWorkouts([
        ...workouts,
        { id, latlng: choosedLocation, type, duration, elevation, distance },
      ]);
      setChoosedLocation(null);
      setSubmittedWorkoutInfo(initialWorkoutInfo);
    }
  };

  console.log(workouts);
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
