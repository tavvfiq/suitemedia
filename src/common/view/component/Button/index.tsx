import { Text, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { PressableOpacity } from '../PressableOpacity';
import { scaleWidth } from '~core/themes/mixins';
import { LABEL_REGULAR } from '~core/themes/typography';
import { COLOR_WHITE, PRIMARY } from '~core/themes/colors';

type Props = {
  label: string;
  capitalize?: boolean;
  onPress: () => void;
  customContainerStyle?: ViewStyle;
};

const Button = ({
  label,
  capitalize = false,
  onPress,
  customContainerStyle,
}: Props) => {
  const _label = capitalize ? label.toUpperCase() : label;
  return (
    <PressableOpacity
      onPress={onPress}
      style={[styles.container, customContainerStyle]}>
      <Text style={styles.label}>{_label}</Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(310),
    height: 41,
    backgroundColor: PRIMARY,
    borderRadius: 12,
  },
  label: {
    ...LABEL_REGULAR,
    color: COLOR_WHITE,
  },
});

export default Button;
