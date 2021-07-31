import styled from "styled-components";

export const Content = styled.p`
  margin-top: auto;
  font-size: 1.3rem;
  text-align: center;
  color: var(--color-light--1);
  width: 100%;
  margin: 0 auto;
  opacity: 0.6;

  .twitter-link:link,
  .twitter-link:visited {
    color: var(--color-light--1);
    transition: all 0.2s;
  }

  .twitter-link:hover,
  .twitter-link:active {
    color: var(--color-light--2);
  }
`;
