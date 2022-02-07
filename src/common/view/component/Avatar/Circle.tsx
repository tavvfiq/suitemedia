import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, { useMemo } from 'react';
import images from '~common/assets/images';
import { scaleWidth } from '~core/themes/mixins';

type Props = {
  image?: string;
  customContainerStyle?: ViewStyle;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
};

const Circle = ({ image, customContainerStyle, size }: Props) => {
  let source: ImageSourcePropType;
  if (image) {
    source = { uri: image };
  } else {
    source = images.ic_avatar_placeholder;
  }

  const containerStyle = useMemo(() => {
    switch (size) {
      case 'xsmall':
        return styles.xsmall;
      case 'small':
        return styles.small;
      case 'medium':
        return styles.medium;
      case 'large':
        return styles.large;
      default:
        return styles.small;
    }
  }, [size]);

  return (
    <View style={[styles.container, containerStyle, customContainerStyle]}>
      <Image style={styles.avatar} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  xsmall: {
    width: scaleWidth(49),
    height: scaleWidth(49),
    borderRadius: scaleWidth(49 / 2),
  },
  small: {
    width: scaleWidth(78),
    height: scaleWidth(78),
    borderRadius: scaleWidth(78 / 2),
  },
  medium: {
    width: scaleWidth(116),
    height: scaleWidth(116),
    borderRadius: scaleWidth(116 / 2),
  },
  large: {
    width: scaleWidth(164),
    height: scaleWidth(164),
    borderRadius: scaleWidth(154 / 2),
  },
});

export default Circle;
