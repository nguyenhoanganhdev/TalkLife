import { Dimensions } from 'react-native';

export const measure = {
  window: {
    ...Dimensions.get('window'),
  },
  screen: {
    ...Dimensions.get('screen'),
  },
};
