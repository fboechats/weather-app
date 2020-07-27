import { useState, useEffect } from 'react';
import { API_KEY } from 'react-native-dotenv';
import { storeWeather, getWeather } from '../utils/asyncStorageUtils';
import useGeoLocation from './useGeoLocation';
import api from '../services/api';
import { filterData } from '../utils/dataUtils';

export default function useWeather() {
  const [weather, setWeather] = useState(null);

  const latLon = useGeoLocation();

  const fetchAPI = async (lat, lon) => {
    try {
      const res = await api.get(
        `/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      const data = await storeWeather(filterData(res.data));

      setWeather(data);
    } catch (err) {
      const data = await getWeather();
      setWeather(data);
    }
  };

  useEffect(() => {
    if (latLon) {
      fetchAPI(...latLon);
    }
  }, [latLon]);

  return weather;
}
