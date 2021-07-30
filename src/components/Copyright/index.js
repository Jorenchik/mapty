import React from "react";

// Styles
import { Wrapper, Content } from "./Copyright.styles";

const Copyright = () => (
  <Wrapper>
    <Content>
      <p className="copyright">
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
      </p>
    </Content>
  </Wrapper>
);

export default Copyright;
