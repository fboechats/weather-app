import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { Container, Title, Description, LoadingStyle } from './styles';

const Loading = () => {
  return (
    <Container>
      <Title>Welcome!</Title>
      <AnimatedLoader
        visible
        source={require('../../assets/loading.json')}
        speed={1}
        animationStyle={LoadingStyle.lottie}
      />
      <Description>Loading...</Description>
    </Container>
  );
};

export default Loading;
