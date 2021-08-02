import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content, Button } from "./Overline.styles";

const Overline = ({ sortingDesc, setSortingDesc }) => {
  // console.log(sortingDesc);
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

Overline.propTypes = {
  sortingDesc: PropTypes.bool,
  setSortingDesc: PropTypes.func,
};

export default Overline;
