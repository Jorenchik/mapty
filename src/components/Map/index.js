import React from "react";

import { TileLayer } from "react-leaflet";

// Styles
import { Content, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Content>
        <div id="map">
          <Map center={[45.4, -75.7]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Map;
