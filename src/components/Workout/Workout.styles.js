import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  .workout {
    background-color: var(--color-dark--2);
    border-radius: 5px;
    padding: 1.5rem 2.25rem;
    margin-bottom: 1.75rem;
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.75rem 1.5rem;
  }

  .workout--running {
    border-left: 5px solid var(--color-brand--2);
  }
  .workout--cycling {
    border-left: 5px solid var(--color-brand--1);
  }

  .workout__title {
    font-size: 1.7rem;
    font-weight: 600;
    grid-column: 1 / -1;
    display: flex;
  }

  .description__text {
    margin-right: auto;
  }

  .workout__buttons > a {
    text-decoration: none;
    color: #9c9c9c;
    padding-left: 0.7em;
  }

  .button__group > a {
    text-decoration: none;
    color: #9c9c9c;
    padding-right: 0em;
    padding-left: 0.7em;
    font-weight: 600;
  }

  .button__group {
    margin-left: auto;
    margin-right: 2.1em;
  }

  .workout__buttons {
    padding-bottom: 0.5em;
    display: flex;
    justify-content: right;
  }

  .button__group > a {
    font-size: 1.7rem;
    margin-left: auto;
  }

  .workout__details {
    display: flex;
    align-items: baseline;
  }

  .workout__icon {
    font-size: 1.8rem;
    margin-right: 0.2rem;
    height: 0.28rem;
  }

  .workout__value {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .workout__unit {
    font-size: 1.1rem;
    color: var(--color-light--1);
    text-transform: uppercase;
    font-weight: 800;
  }

  .workout:hover {
    opacity: 0.85;
    transition: all 0.2s;
  }
`;
