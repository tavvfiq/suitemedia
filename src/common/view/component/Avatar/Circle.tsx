import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import images from '~common/assets/images';
import { scaleWidth } from '~core/themes/mixins';

type Props = {
  image?: string;
  customContainerStyle?: ViewStyle;
};

const Circle = ({ image, customContainerStyle }: Props) => {
  let source: ImageSourcePropType;
  if (image) {
    source = { uri: image };
  } else {
    source = images.ic_avatar_placeholder;
  }

  return (
    <View style={[styles.container, customContainerStyle]}>
      <Image style={styles.avatar} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(78),
    height: scaleWidth(78),
    borderRadius: scaleWidth(78 / 2),
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});

export default Circle;
