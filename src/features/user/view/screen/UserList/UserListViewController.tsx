import React from 'react';
import {
  Layout,
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import UserListView from './UserListView';
import Screen from '~common/interface/screen';
import useFetchOnMount from '~core/hooks/useFetchOnMount';
import { observer } from 'mobx-react-lite';
import { UserI } from '~features/user/data/model/user';
import UserViewModel from '~features/user/data/viewmodel/userViewModel';
import userStore from '~features/user/data/store/userStore';
import { _userRepository } from '~features/user/data/repository/userRepository';
import { RNNBottomSheet } from 'react-native-navigation-bottom-sheet';
import UserBottomSheet from '../../component/UserBottomSheet';

const UserListViewController: NavigationFunctionComponent = observer(
  ({ componentId }) => {
    const vm = React.useRef(
      new UserViewModel(userStore, _userRepository),
    ).current;

    let page = React.useRef(1).current;
    let refreshing = React.useRef(false).current;

    useFetchOnMount(() => {
      vm.getUsers(page, 10);
    });

    React.useEffect(() => {
      if (!vm.loading) {
        refreshing = false;
      }
    }, [vm.loading]);

    const onRefresh = function () {
      refreshing = true;
      page = 1;
      vm.getUsers(page, 10);
    };

    const loadMore = function () {
      if (page * 10 >= vm.users.length) {
        page++;
        vm.getUsers(page, 10);
      }
    };

    const showUserBottomSheet = function (userId?: string) {
      const selectedUser = vm.getUser(parseInt(userId!, 10));
      RNNBottomSheet.openBottomSheet({
        style: {
          elevation: 5,
        },
        fadeOpacity: 0,
        borderRadius: 16,
        snapPoints: ['0%', '30%'],
        renderContent: () => (
          <UserBottomSheet
            user={selectedUser}
            selectOnPress={() => {
              RNNBottomSheet.closeBottomSheet();
              navigateToHomescreen(selectedUser);
            }}
          />
        ),
      });
    };

    const onBackPress = function () {
      Navigation.pop(componentId);
    };

    const navigateToHomescreen = function (user: UserI) {
      vm.setSelectedUser(user.id);
      Navigation.pop(componentId);
    };

    return (
      <UserListView
        onBackPress={onBackPress}
        users={vm.users}
        loading={vm.loading}
        userOnPress={navigateToHomescreen}
        markerOnPress={showUserBottomSheet}
        onLoadMore={loadMore}
        isRefreshing={refreshing}
        onRefresh={onRefresh}
      />
    );
  },
);

UserListViewController.options = {
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

const UserList: Screen = {
  id: 'USER_LIST_VIEW',
  name: 'UserList',
  component: UserListViewController,
  isTab: false,
};

export const UserListLayout = function (): Layout {
  return {
    component: {
      name: UserList.name,
      id: UserList.id,
    },
  };
};

export default UserList;
