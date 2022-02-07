import React from 'react';
import {
  Layout,
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import Screen from '~common/interface/screen';
import Dialog from '~common/view/component/Dialog';
import { reverseString } from '~core/utils/string';
import { Modal } from '~core/view/modal';
import { HomeLayout } from '~features/user/view/screen/Home/HomeViewController';
import LoginView from './LoginView';

const LoginViewController: NavigationFunctionComponent = ({ componentId }) => {
  const checkPalindrome = function (text: string): boolean {
    const reversed = reverseString(text);
    return reversed === text;
  };

  const checkOnPress = function (text: string) {
    let desc = `${text} is `;
    if (checkPalindrome(text)) {
      desc = desc + 'palindrome';
    } else {
      desc = desc + 'not palindrome';
    }
    Modal.open({
      renderContent: closeThisModal => {
        return (
          <Dialog
            title="Check Palindrome"
            description={desc}
            yesLabel="oke"
            onPressYes={() => {
              closeThisModal();
            }}
          />
        );
      },
    });
  };

  const nextOnPress = function (text: string) {
    Navigation.push(componentId, HomeLayout({ name: text }));
  };

  return <LoginView checkOnPress={checkOnPress} nextOnPress={nextOnPress} />;
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

export const LoginLayout: Layout = {
  component: {
    name: Login.name,
    id: Login.id,
  },
};

export default Login;
