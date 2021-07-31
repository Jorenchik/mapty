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
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    console.log(choosedLocation);
  }, [setIsFormSubmitted, isFormSubmitted]);

  console.log(submittedWorkoutInfo);

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
