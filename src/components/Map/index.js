import React, { useEffect, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

// Styles
import { Content } from "./Map.styles";

// Components
import Spinner from "../Spinner";

const getLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (location) => location,
      () => [51.505, -0.09]
    );
  }
};

function MyComponent({ setChoosedLocation }) {
  const map = useMapEvents({
    click: (e) => {
      setChoosedLocation(e.latlng);
    },
    load: (e) => {
      console.log(e);
    },
  });
  return null;
}

const Map = ({ setChoosedLocation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const location = getLocation();
  }, []);

  const handleClick = () => {
    console.log("fewfew");
  };
  return (
    <Content>
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <MyComponent setChoosedLocation={setChoosedLocation} />
        <TileLayer
          onClick={handleClick}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Content>
  );
};

export default Map;
