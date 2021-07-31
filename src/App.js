import React from "react";

import "./App.css";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";
import { useEffect, useState } from "react";

const App = () => {
  const [choosedLocation, setChoosedLocation] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedWorkoutInfo, setSubmittedWorkoutInfo] = useState({
    type: "running",
  });
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const type = submittedWorkoutInfo.type;
    const distance = +submittedWorkoutInfo.distance;
    const duration = +submittedWorkoutInfo.duration;
    if (!distance || !duration || !type) return;
    if (type === "running" && duration >= 0 && distance >= 0) {
      const cadence = +submittedWorkoutInfo.cadence;
      if (!cadence) return;
      setWorkouts([
        ...workouts,
        { latlng: choosedLocation, type, duration, cadence, distance },
      ]);
    } else {
      const elevation = +submittedWorkoutInfo.elevation;
      if (!elevation) return;
      setWorkouts([
        ...workouts,
        { latlng: choosedLocation, type, duration, elevation, distance },
      ]);
    }
  }, [setIsFormSubmitted, isFormSubmitted]);

  return (
    <Content>
      <SideBar
        formVisible={choosedLocation ? true : false}
        setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        setIsFormSubmitted={setIsFormSubmitted}
        submittedWorkoutInfo={submittedWorkoutInfo}
      />
      <Map setChoosedLocation={setChoosedLocation} />
    </Content>
  );
};

export default App;
