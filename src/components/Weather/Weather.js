import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {
  format,
  getDate,
  getMonth,
  getHours,
  isToday,
  isTomorrow,
} from 'date-fns';
import imageUtils from '../../utils/imageUtils';
import { toTitleCase } from '../../utils/textUtils';
import Card from '../Card/Card';
import {
  Container,
  CurrentDay,
  City,
  Text,
  Icon,
  Temp,
  Description,
  Week,
} from './styles';

const Weather = ({ name, list }) => {
  const currentWeather = list.find((day) => {
    const milliSecDate = day.dt * 1000;
    return isToday(milliSecDate) || isTomorrow(milliSecDate);
  });

  const formatCardInfo = list.map((day) => {
    const {
      weather: [{ icon }],
      main: { temp },
      dt,
    } = day;
    const milliSecDate = dt * 1000;
    return {
      date: `${getDate(milliSecDate)}/${getMonth(milliSecDate)}`,
      hour: `${getHours(milliSecDate)}h`,
      name: format(milliSecDate, 'iii'),
      temp: `${Math.round(temp)}°C`,
      icon: imageUtils[icon] || imageUtils['02d'],
    };
  });

  const {
    weather: [{ icon, description }],
    main: { temp },
    dt,
  } = currentWeather || {};

  return (
    <Container>
      <CurrentDay>
        <City>{name}</City>
        <Text>{format(dt * 1000, 'EEEE')}</Text>
        <Icon source={imageUtils[icon] || imageUtils['02d']} />
        <Temp>
          {Math.round(temp)}
          °C
        </Temp>
        <Description>{toTitleCase(description)}</Description>
      </CurrentDay>
      <Week horizontal showsHorizontalScrollIndicator={false}>
        {formatCardInfo.map((day) => (
          <Card
            key={uuid()}
            icon={day.icon}
            name={day.name}
            temp={day.temp}
            hour={day.hour}
            date={day.date}
          />
        ))}
      </Week>
    </Container>
  );
};

Weather.propTypes = {
  name: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          description: PropTypes.string,
        })
      ),
      main: PropTypes.shape({
        temp: PropTypes.number,
      }),
      dt: PropTypes.number,
    })
  ),
};

export default Weather;
