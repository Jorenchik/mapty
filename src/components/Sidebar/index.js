import React from "react";

// Styles
import { Content, Wrapper } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Form from "../Form";
import Copyright from "../Copyright";
import Logo from "../Logo";

const SideBar = () => (
  <Wrapper>
    <Content>
      <Logo />
      <Form />
      <Workouts />
      <Copyright />
    </Content>
  </Wrapper>
);

export default SideBar;
