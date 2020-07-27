import React from 'react';
import useWeather from './src/hooks/useWeather';
import Loading from './src/components/Loading/Loading';
import Weather from './src/components/Weather/Weather';
import { Container } from './src/components/globalStyle';

export default function App() {
  const weather = useWeather();

  return (
    <Container>
      {!weather ? (
        <Loading />
      ) : (
        <Weather name={weather.name} list={weather.list} />
      )}
    </Container>
  );
}
