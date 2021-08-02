import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content, Button } from "./Overline.styles";

const Overline = ({ sortingDesc, setSortingDesc, handleDeleteAll }) => {
  const handleSortClick = () => {
    setSortingDesc(sortingDesc ? false : true);
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Button href="#" onClick={handleSortClick}>
            Sort {sortingDesc ? "⬇" : "⬆"}
          </Button>
          <Button href="#" onClick={handleDeleteAll}>
            Delete all
          </Button>
        </Content>
      </Wrapper>
    </>
  );
};

Overline.propTypes = {
  sortingDesc: PropTypes.bool,
  setSortingDesc: PropTypes.func,
  handleDeleteAll: PropTypes.func,
};

export default Overline;
