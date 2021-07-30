import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  .workouts {
    list-style: none;
    height: 77vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .workouts::-webkit-scrollbar {
    width: 0;
  }
`;
