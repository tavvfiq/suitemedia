import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';
import Header from '~common/view/component/Header';
import MapIcon from '~features/user/assets/svg/MarkerIcon';
import Menu from '~features/user/assets/svg/Menu';
import User, { UserI } from '~features/user/data/model/user';
import Placeholder from '../../component/List/Placeholder';
import List from '../../component/List';
import UserMapView from '../../component/UserMapView';
import { generateRandomLat, generateRandomLong } from '~core/utils/generator';

type Props = {
  users?: User[];
  onBackPress: () => void;
  loading: boolean;
  userOnPress: (user: UserI) => void;
  markerOnPress: (userId?: string) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
  isRefreshing: boolean;
};

const UserListView = ({
  users = [],
  onBackPress,
  userOnPress,
  markerOnPress,
  onRefresh,
  onLoadMore,
  isRefreshing,
  loading,
}: Props) => {
  const [isMapView, toggleMapView] = React.useState(false);
  const rightIconOnPress = function () {
    toggleMapView(!isMapView);
  };

  const renderRightIcon = function () {
    return isMapView ? <Menu /> : <MapIcon />;
  };

  const renderUsers: ListRenderItem<User> = ({ item }) => {
    return <List user={item} onPress={userOnPress} />;
  };

  const renderEmptyUsers = () => {
    if (loading) {
      return <Placeholder />;
    }
    return <View />;
  };

  const renderUserList = () => {
    return !isMapView ? (
      <FlatList
        data={users}
        renderItem={renderUsers}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderEmptyUsers}
        ListFooterComponent={renderEmptyUsers}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
      />
    ) : (
      <UserMapView
        initLat={parseFloat(generateRandomLat())}
        initLng={parseFloat(generateRandomLong())}
        users={users}
        markerOnPress={markerOnPress}
      />
    );
  };

  return (
    <>
      <Header
        title="Users"
        leftIconOnPress={onBackPress}
        rightIcon={renderRightIcon()}
        rightIconOnPress={rightIconOnPress}
      />
      {renderUserList()}
    </>
  );
};

export default UserListView;
