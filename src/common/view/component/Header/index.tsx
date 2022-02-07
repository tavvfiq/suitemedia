import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ArrowLeft from '~common/assets/svg/ArrowLeft';
import { TITLE_H2 } from '~core/themes/typography';
import { BORDER_GREY16, COLOR_WHITE, PRIMARY } from '~core/themes/colors';
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
    borderBottomColor: BORDER_GREY16,
    borderBottomWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: COLOR_WHITE,
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
    includeFontPadding: false,
  },
});

export default Header;
