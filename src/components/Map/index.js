import React, { useEffect } from "react";
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
function MyComponent({
  setChoosedLocation,
  setSubmissionType,
  location,
  workouts,
  setSubmittedWorkoutInfo,
  isShowAllClicked,
  setIsShowAllClicked,
  loadingLocations,
}) {
  const map = useMapEvents({
    click: (e) => {
      setSubmittedWorkoutInfo({
        type: "running",
        duration: "0",
        distance: "0",
        cadence: "0",
        elevation: "0",
      });
      setChoosedLocation(e.latlng);
      setSubmissionType("add");
    },
  });

  useEffect(() => {
    if (!isShowAllClicked) return;
    const markers = workouts.map((workout) => {
      const { lat, lng } = workout.latlng;
      return [lat, lng];
    });
    map.fitBounds(markers);
    setIsShowAllClicked(false);
  }, [isShowAllClicked, setIsShowAllClicked, workouts, map]);

  // Set location to current location state each time it changes
  useEffect(() => {
    map.setView(location);
  }, [location, map]);

  return null;
}

const Map = ({
  setChoosedLocation,
  workouts,
  location,
  setSubmissionType,
  setSubmittedWorkoutInfo,
  workoutGeocodes,
  isShowAllClicked,
  setIsShowAllClicked,
  loadingLocations,
}) => {
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
          setSubmittedWorkoutInfo={setSubmittedWorkoutInfo}
          isShowAllClicked={isShowAllClicked}
          setIsShowAllClicked={setIsShowAllClicked}
          workouts={workouts}
          location={location}
          loadingLocations={loadingLocations}
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
              } km ${
                workoutGeocodes.length !== 0 &&
                workoutGeocodes.find((geocode) => geocode.id === workout.id)
                  ? `${
                      workoutGeocodes.find(
                        (geocode) => geocode.id === workout.id
                      ).principalSubdivision
                    }, ${
                      workoutGeocodes.find(
                        (geocode) => geocode.id === workout.id
                      ).locality
                    }`
                  : "Loading..."
              }`}
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
  setSubmittedWorkoutInfo: PropTypes.func,
  setIsShowAllClicked: PropTypes.func,
  location: PropTypes.array,
  workouts: PropTypes.array,
  isShowAllClicked: PropTypes.bool,
};

Map.propTypes = {
  setChoosedLocation: PropTypes.func,
  setSubmissionType: PropTypes.func,
  setSubmittedWorkoutInfo: PropTypes.func,
  isShowAllClicked: PropTypes.bool,
  setIsShowAllClicked: PropTypes.func,
  workoutGeocodes: PropTypes.array,
  loadingLocations: PropTypes.bool,
  workouts: PropTypes.array,
  location: PropTypes.array,
};

export default Map;
