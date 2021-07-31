import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  height: 100%;
  background-color: var(--color-light--1);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  #map {
    height: 100vh;
    overflow: hidden;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;
