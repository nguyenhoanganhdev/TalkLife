import { palette } from '@theme/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
});
