import React from "react";

// Styles
import { Wrapper, Content, Button } from "./Overline.styles";

const Overline = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Button href="#">Sort ⬆</Button>
          <Button href="#">Delete all</Button>
        </Content>
      </Wrapper>
    </>
  );
};

export default Overline;
