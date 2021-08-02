import React from "react";

// Styles
import { Wrapper, Content } from "./Overline.styles";

const Overline = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <button>Sort ⬆</button>
          <button>Delete all</button>
        </Content>
      </Wrapper>
    </>
  );
};

export default Overline;
