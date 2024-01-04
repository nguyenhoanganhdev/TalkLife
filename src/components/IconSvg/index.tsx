import { palette } from '@theme/colors';
import React from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

export interface SgvIconProps {
  style?: StyleProp<ViewStyle>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
  color?: string;
  size: number;
  onPress?: () => void;
}

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const IconSvg = (props: SgvIconProps) => {
  const { style, Icon, size, onPress, color } = props;
  const $styles = [$container, { width: size, height: size }, style];

  return (
    <Pressable onPress={onPress}>
      <View style={$styles}>
        {Icon ? <Icon style={{ color: color ?? palette.sun_flower }} width={size} height={size} /> : null}
      </View>
    </Pressable>
  );
};

export default IconSvg;
