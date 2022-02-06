import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import React from 'react';
import { scaleWidth } from '~core/themes/mixins';
import { COLOR_WHITE, INACTIVE_TEXT, TEXT_BLACK } from '~core/themes/colors';
import { TITLE_H3 } from '~core/themes/typography';

type Props = {
  placeholder?: string;
  customContainerStyle?: ViewStyle;
} & TextInputProps;

const TextInput = ({
  placeholder = '',
  customContainerStyle,
  ...rest
}: Props) => {
  return (
    <View style={[styles.container, customContainerStyle]}>
      <RNTextInput
        style={styles.textInput}
        placeholderTextColor={INACTIVE_TEXT}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(310),
    height: 41,
    borderRadius: 12,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 16,
  },
  textInput: {
    ...TITLE_H3,
    color: TEXT_BLACK,
    paddingHorizontal: 0,
    margin: 0,
  },
});

export default TextInput;
