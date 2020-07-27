import { useState, useEffect } from 'react';

export default function useGeoLocation() {
  const [latLon, setLatLon] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatLon([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        throw Error(err);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return latLon;
}
