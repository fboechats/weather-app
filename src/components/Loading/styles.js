import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #272343;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: 100;
  color: white;
  padding-bottom: 20px;
`;

export const Description = styled.Text`
  font-size: 24px;
  font-weight: 100;
  color: #bae8e8;
  padding-top: 20px;
`;

export const LoadingStyle = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
  },
});
