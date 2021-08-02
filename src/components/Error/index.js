import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content } from "./Error.styles";

const Error = ({ message }) => (
  <Wrapper>
    <Content>{message}</Content>
  </Wrapper>
);

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
