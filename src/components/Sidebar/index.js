import React from "react";

// Styles
import { Content } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Copyright from "../Copyright";
import Logo from "../Logo";

const SideBar = ({ formVisible }) => {
  return (
    <Content>
      <Logo />
      <Workouts formVisible={formVisible} />
      <Copyright />
    </Content>
  );
};
export default SideBar;
