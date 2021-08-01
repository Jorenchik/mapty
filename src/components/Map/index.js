import React from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

// Styles
import { Content } from "./Map.styles";

function MyComponent({ setChoosedLocation, location }) {
  const map = useMapEvents({
    click: (e) => {
      setChoosedLocation(e.latlng);
    },
  });
  map.setView(location);
  return null;
}

const Map = ({ setChoosedLocation, workouts, location }) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(true);

  // useEffect(() => {
  //   const location = getLocation();
  // }, []);
  return (
    <Content>
      <MapContainer
        id="map"
        center={location}
        zoom={13}
        scrollWheelZoom={false}
      >
        <MyComponent
          setChoosedLocation={setChoosedLocation}
          location={location}
        />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {workouts.map((workout) => (
          <Marker key={workout.id} position={workout.latlng}>
            <Popup className={`${workout.type}-popup`}>
              {workout.type === "running" ? "🏃‍♂️" : "🚴‍♂️"}
              <span> </span>
              {`${workout.type[0].toUpperCase()}${workout.type.slice(1)} - ${
                workout.distance
              } km`}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Content>
  );
};

export default Map;
