import { palette } from '@theme/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  form: {},
  input: {
    paddingLeft: 0,
    fontSize: 14,
  },
  button: {},
  buttonText: {
    color: palette.sun_flower,
    fontSize: 12,
    fontWeight: '600',
  },
  buttonSignIn: {
    backgroundColor: palette.sun_flower,
    marginTop: 28,
  },
  buttonSignInText: {
    color: palette.black,
    fontSize: 14,
    padding: 10,
  },
  or: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 40 },
  orText: { fontSize: 16, color: palette.white, marginHorizontal: 40, textAlign: 'center' },
  textBasic: {
    fontSize: 12,
    color: palette.green_sea,
  },
  line: {
    backgroundColor: palette.white,
    height: 2,
    flex: 1,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  socialButton: {
    borderRadius: 40,
    // height: 40,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  h1: {
    color: '#FFF',
    fontFamily: 'Lato',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22, // You can adjust this value based on your requirements
    // Additional styles as needed
  },
  h1Style: {
    paddingBottom: 40,
  },
  textCommon: {
    color: '#FFF',
    fontFamily: 'Lato',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18, // You can adjust this value based on your requirements
    // Additional styles as needed
  },
  confirmAge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmAgeView: {
    paddingHorizontal: 8,
  },
  buttonCircle: {
    borderRadius: 999,
    width: 54,
    height: 54,
    borderColor: '#647FFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    paddingVertical: 16, // Adjust the padding as needed
    paddingHorizontal: -8,
  },
  item: {
    flex: 1,
    margin: 8,
    paddingVertical: 24,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
