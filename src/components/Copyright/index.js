import React from "react";

// Styles
import { Content } from "./Copyright.styles";

const Copyright = () => (
  <Content>
    &copy; Copyright by<span> </span>
    <a
      className="twitter-link"
      target="_blank"
      rel="noreferrer"
      href="https://twitter.com/jonasschmedtman"
    >
      Jonas Schmedtmann
    </a>
    . Use for learning or your portfolio. Don't use to teach. Don't claim as
    your own.
  </Content>
);

export default Copyright;
