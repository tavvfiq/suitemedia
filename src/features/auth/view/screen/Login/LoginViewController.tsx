import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import Screen from '~common/interface/screen';
import LoginView from './LoginView';

const LoginViewController: NavigationFunctionComponent = ({ componentId }) => {
  return <LoginView checkOnPress={() => {}} nextOnPress={() => {}} />;
};

LoginViewController.options = {
  layout: {
    componentBackgroundColor: 'white',
  },
  topBar: {
    visible: false,
  },
  bottomTabs: {
    visible: false,
  },
};

const Login: Screen = {
  id: 'LOGIN_VIEW',
  name: 'Login',
  component: LoginViewController,
  isTab: false,
};

export default Login;
