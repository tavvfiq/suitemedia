import { View, StyleSheet } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import Header from '~common/view/component/Header';

type Props = {
  uri: string;
  onBackPress: () => void;
};

const UserWebsiteView = ({ uri, onBackPress = () => {} }: Props) => {
  return (
    <View style={styles.container}>
      <Header title="" leftIconOnPress={onBackPress} />
      <WebView style={styles.webView} source={{ uri: uri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  webView: {
    flexGrow: 1,
  },
});

export default UserWebsiteView;
