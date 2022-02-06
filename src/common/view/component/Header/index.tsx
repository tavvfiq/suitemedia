import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ArrowLeft from '~common/assets/svg/ArrowLeft';
import { TITLE_H2 } from '~core/themes/typography';
import { PRIMARY } from '~core/themes/colors';
import { PressableOpacity } from '../PressableOpacity';
import { scaleWidth } from '~core/themes/mixins';

type Props = {
  title?: string;
  leftIconOnPress?: () => void;
  rightIconOnPress?: () => void;
  rightIcon?: React.ReactNode;
};

const Header = ({
  title,
  leftIconOnPress = () => {},
  rightIcon,
  rightIconOnPress = () => {},
}: Props) => {
  return (
    <View style={styles.container}>
      <PressableOpacity style={styles.button} onPress={leftIconOnPress}>
        <ArrowLeft />
      </PressableOpacity>
      <Text style={styles.title}>{title}</Text>
      <PressableOpacity style={styles.button} onPress={rightIconOnPress}>
        {rightIcon}
      </PressableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...TITLE_H2,
    color: PRIMARY,
  },
});

export default Header;
