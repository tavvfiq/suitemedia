import React from 'react';
import {
  Layout,
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import Screen from '~common/interface/screen';
import UserWebsiteView from './UserWebsiteView';

interface Props {
  uri: string;
}

const UserWebsiteViewController: NavigationFunctionComponent<Props> = ({
  componentId,
  uri,
}) => {
  const onBackPress = function () {
    Navigation.pop(componentId);
  };

  return <UserWebsiteView onBackPress={onBackPress} uri={uri} />;
};

UserWebsiteViewController.options = {
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

const UserWebsite: Screen = {
  id: 'USER_WEBSITE_VIEW',
  name: 'UserWebsite',
  component: UserWebsiteViewController,
  isTab: false,
};

export const UserWebsiteLayout = function (props: Props): Layout<Props> {
  return {
    component: {
      name: UserWebsite.name,
      id: UserWebsite.id,
      passProps: props,
    },
  };
};

export default UserWebsite;
