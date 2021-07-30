import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  flex-basis: 50rem;
  background-color: var(--color-dark--1);
  padding: 3rem 5rem 4rem 5rem;
  display: flex;
  flex-direction: column;

  .logo {
    height: 5.2rem;
    align-self: center;
    margin-bottom: 4rem;
  }

  .workouts {
    list-style: none;
    height: 77vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .workouts::-webkit-scrollbar {
    width: 0;
  }

  .copyright {
    margin-top: auto;
    font-size: 1.3rem;
    text-align: center;
    color: var(--color-light--1);
  }

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
