import React from "react";

// Styles
import { Content } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Form from "../Form";
import Copyright from "../Copyright";
import Logo from "../Logo";

const SideBar = () => (
  <Content>
    <Logo />
    <Form />
    <Workouts />
    <Copyright />
  </Content>
);

export default SideBar;
