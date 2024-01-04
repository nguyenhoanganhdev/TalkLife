import { palette } from '@theme/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: '600',
  },
  errorMessage: {
    marginTop: 4,
    color: palette.alizarin,
    fontSize: 12,
    fontWeight: '600',
  },
});
