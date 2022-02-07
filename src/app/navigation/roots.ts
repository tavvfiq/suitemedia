import { Navigation } from 'react-native-navigation';
import { LoginLayout } from '~features/auth/view/screen/Login/LoginViewController';
import tabs from './bottomTabs';

export function setRootBottomTabs() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'TAB_VIEW',
        children: tabs,
      },
    },
  });
}

export function setRootStack() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'STACK_VIEW',
        children: [
          {
            ...LoginLayout,
          },
        ],
      },
    },
  });
}
