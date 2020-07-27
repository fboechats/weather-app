import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, Text } from './styles';

export default function Card({ name, icon, temp, hour, date }) {
  return (
    <Container>
      <Icon source={icon} />
      <Text>{name}</Text>
      <Text>{temp}</Text>
      <Text>{date}</Text>
      <Text>{hour}</Text>
    </Container>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
  temp: PropTypes.string,
  hour: PropTypes.string,
  date: PropTypes.string,
};
