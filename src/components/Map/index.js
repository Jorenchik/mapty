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
  });
  return null;
}

const Map = ({ setChoosedLocation, workouts }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const location = getLocation();
  }, []);

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
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {workouts.map((workout) => (
          <Marker key={workout.id} position={workout.latlng}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Content>
  );
};

export default Map;
