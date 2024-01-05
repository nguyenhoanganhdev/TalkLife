import { palette } from '@theme/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    color: '#FFF',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16, // You can adjust this value based on your requirements
    letterSpacing: -0.3,
  },
  errorMessage: {
    marginTop: 4,
    color: palette.alizarin,
    fontSize: 12,
    fontWeight: '600',
  },
  labelStyle: {
    color: 'rgba(255, 255, 255, 0.50)',
    fontFamily: 'Lato',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12, // You can adjust this value based on your requirements
    letterSpacing: -0.3,
    // Additional styles as needed
  },
  textInputStyle: {
    color: '#FFF',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16, // You can adjust this value based on your requirements
    letterSpacing: -0.3,
    // Additional styles as needed
  },
});
