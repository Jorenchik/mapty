import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: var(--color-dark--2);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1000;
`;

export const Content = styled.div`
  border: 3px solid black;
  border-top: 3px solid lightgrey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
