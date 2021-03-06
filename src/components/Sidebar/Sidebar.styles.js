import styled from "styled-components";

export const Content = styled.div`
  flex-basis: 50rem;
  background-color: var(--color-dark--1);
  padding: 3rem 5rem 4rem 5rem;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media screen and (max-width: 1024px) {
    flex-basis: 20rem;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 15rem;
  }

  .logo {
    height: 5.2rem;
    align-self: center;
    margin-bottom: 4rem;
  }
`;
