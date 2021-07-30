import React from "react";

// Styles
import { Content, Wrapper } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Form from "../Form";
import Copyright from "../Copyright";

const SideBar = () => (
  <Wrapper>
    <Content>
      <Form />
      <Workouts />
      <Copyright />
    </Content>
  </Wrapper>
);

export default SideBar;
