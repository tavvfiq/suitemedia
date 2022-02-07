import React from 'react';
import HomeView from './HomeView';
import {
  Layout,
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import Screen from '~common/interface/screen';
import { UserListLayout } from '../UserList/UserListViewController';
import { observer } from 'mobx-react-lite';
import userStore from '~features/user/data/store/userStore';
import { UserWebsiteLayout } from '../UserWebsite/UserWebsiteViewController';

interface Props {
  name: string;
}

const HomeViewController: NavigationFunctionComponent<Props> = observer(
  ({ componentId, name }) => {
    const onBackPress = function () {
      Navigation.pop(componentId);
    };

    const goToChooseUser = function () {
      Navigation.push(componentId, UserListLayout());
    };

    const goToUserWebsite = function () {
      Navigation.push(
        componentId,
        UserWebsiteLayout({
          uri: 'https://suitmedia.com/',
        }),
      );
    };

    return (
      <HomeView
        websiteOnPress={goToUserWebsite}
        name={name}
        onBackPress={onBackPress}
        chooseUserButtonPressed={goToChooseUser}
        user={userStore.selectedUser}
      />
    );
  },
);

HomeViewController.options = {
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

const Home: Screen = {
  id: 'HOME_VIEW',
  name: 'Home',
  component: HomeViewController,
  isTab: false,
};

export const HomeLayout = function ({ name }: Props): Layout<Props> {
  return {
    component: {
      name: Home.name,
      id: Home.id,
      passProps: {
        name,
      },
    },
  };
};

export default Home;
