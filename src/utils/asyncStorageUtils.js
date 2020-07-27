import { AsyncStorage } from 'react-native';

export const storeWeather = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    throw Error(err);
  }
};

export const getWeather = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    throw Error(err);
  }
};
