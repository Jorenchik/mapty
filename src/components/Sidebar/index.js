import React from "react";

// Styles
import { Content } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Copyright from "../Copyright";
import Logo from "../Logo";

const SideBar = ({
  formVisible,
  setIsFormSubmitted,
  setSubmittedWorkoutInfo,
  submittedWorkoutInfo,
}) => {
  return (
    <Content>
      <Logo />
      <Workouts
        formVisible={formVisible}
        setIsFormSubmitted={setIsFormSubmitted}
        setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
        submittedWorkoutInfo={submittedWorkoutInfo}
      />
      <Copyright />
    </Content>
  );
};
export default SideBar;
