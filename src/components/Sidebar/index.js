import React from "react";

// Styles
import { Content, Wrapper } from "./Sidebar.styles";

// Components
import Workouts from "../Workouts";
import Form from "../Form";

const SideBar = () => (
  <Wrapper>
    <Content>
      <Form />
      <Workouts />
    </Content>
  </Wrapper>
);

export default SideBar;
