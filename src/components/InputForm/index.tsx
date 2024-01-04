import { palette } from '@theme/colors';
import { View, Text, Input, Box } from 'native-base';
import React, { FC } from 'react';
import { TextStyle } from 'react-native';
import styles from './styles';

type InputFormProps = {
  label?: string;
  placeholder?: string | null;
  value: string;
  customStyle?: TextStyle;
  errorMessage: string;
  showErrorMessage: boolean;
};
const InputForm: FC<InputFormProps> = ({
  placeholder,
  label,
  value,
  customStyle,
  errorMessage,
  showErrorMessage,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Input
        {...rest}
        style={{ ...styles.input, ...customStyle }}
        variant="underlined"
        borderBottomColor={palette.silver}
        placeholder={placeholder ?? ''}
        value={value}
      />
      {Boolean(errorMessage) && showErrorMessage ? (
        <View>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      ) : (
        <Box style={{ height: 25 }} />
      )}
    </View>
  );
};

export default InputForm;
