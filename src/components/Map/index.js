import React from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Styles
import { Content } from "./Map.styles";

const Map = () => {
  return (
    <Content>
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Content>
  );
};

export default Map;
