import React from "react";

import { TileLayer } from "react-leaflet";

// Styles
import { Content, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Content>
        <div id="map"></div>
      </Content>
    </Wrapper>
  );
};

export default Map;
