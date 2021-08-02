import React from "react";
import PropTypes from "prop-types";

// Components
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

// Styles
import { Content } from "./Map.styles";

// Map event using component
function MyComponent({ setChoosedLocation, setSubmissionType, location }) {
  const map = useMapEvents({
    click: (e) => {
      setChoosedLocation(e.latlng);
      setSubmissionType("add");
    },
  });
  map.setView(location);
  return null;
}

const Map = ({ setChoosedLocation, workouts, location, setSubmissionType }) => {
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
          setSubmissionType={setSubmissionType}
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

MyComponent.propTypes = {
  setChoosedLocation: PropTypes.func,
  setSubmissionType: PropTypes.func,
  location: PropTypes.array,
};

Map.propTypes = {
  setChoosedLocation: PropTypes.func,
  setSubmissionType: PropTypes.func,
  workouts: PropTypes.array,
  location: PropTypes.array,
};

export default Map;
