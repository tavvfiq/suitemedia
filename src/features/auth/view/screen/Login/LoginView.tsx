import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import images from '~features/auth/assets/images';
import { CircleAvatar } from '~common/view/component/Avatar';
import TextInput from '~common/view/component/TextInput';
import Button from '~common/view/component/Button';

type Props = {
  checkOnPress: () => void;
  nextOnPress: () => void;
};

const LoginView = ({ checkOnPress, nextOnPress }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={images.bg_login} style={styles.imageBackground} />
      <CircleAvatar customContainerStyle={styles.avatar} />
      <TextInput placeholder="Name" customContainerStyle={styles.textInput} />
      <TextInput
        placeholder="Palindrome"
        customContainerStyle={styles.textInput}
      />
      <Button
        label="CHECK"
        onPress={checkOnPress}
        customContainerStyle={styles.button}
      />
      <Button
        label="NEXT"
        onPress={nextOnPress}
        customContainerStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  avatar: {
    marginBottom: 58,
  },
  textInput: {
    marginBottom: 22,
  },
  button: {
    marginTop: 15,
  },
});

export default LoginView;
