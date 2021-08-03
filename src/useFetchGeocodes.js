import { useEffect } from "react";

// API
import API from "./API";

export const useFetchGeocodes = (
  workouts,
  setWorkoutGeocodes,
  setLoadingLocations
) => {
  useEffect(() => {
    const fetchGeocodes = async () => {
      if (workouts.length === 0) return;
      const geocodes = [];
      workouts.forEach(async (workout) => {
        const geocode = await API.fetchGeocode(workout.latlng);
        const geocodeWithId = {
          ...geocode,
          id: workout.id,
        };
        geocodes.push(geocodeWithId);
      });
      setWorkoutGeocodes(geocodes);
    };
    setLoadingLocations(true);
    fetchGeocodes();
    setLoadingLocations(false);
  }, [workouts, setWorkoutGeocodes, setLoadingLocations]);
};
