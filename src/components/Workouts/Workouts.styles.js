import styled from "styled-components";

export const Content = styled.div`
  .workouts {
    list-style: none;
    height: 74vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .workouts::-webkit-scrollbar {
    width: 0;
  }
`;
