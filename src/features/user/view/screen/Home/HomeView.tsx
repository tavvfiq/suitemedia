import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '~common/view/component/Header';
import { CircleAvatar } from '~common/view/component/Avatar';
import Button from '~common/view/component/Button';
import { PARAGRAPH, TITLE_H1, TITLE_H2 } from '~core/themes/typography';
import { PRIMARY, TEXT_COLOR, TEXT_GRAY1 } from '~core/themes/colors';
import { UserI } from '~features/user/data/model/user';
import { PressableOpacity } from '~common/view/component/PressableOpacity';

type Props = {
  name?: string;
  onBackPress: () => void;
  chooseUserButtonPressed: () => void;
  user: UserI | null;
  websiteOnPress: () => void;
};

const HomeView = ({
  name,
  onBackPress,
  chooseUserButtonPressed,
  user,
  websiteOnPress,
}: Props) => {
  const renderWhenUserSelected = function () {
    return (
      <>
        <Text style={styles.userName}>
          {`${user?.first_name} ${user?.last_name}`}
        </Text>
        <Text style={styles.email}>{user?.email}</Text>
        <PressableOpacity onPress={websiteOnPress}>
          <Text style={styles.website}>Website</Text>
        </PressableOpacity>
      </>
    );
  };
  return (
    <View style={styles.outer}>
      <Header title="Home" leftIconOnPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.middle}>
          <CircleAvatar size="large" image={user?.avatar} />
          {user === null && (
            <Text style={styles.emptyUserText}>
              Select a user to show the profile
            </Text>
          )}
          {user !== null && renderWhenUserSelected()}
        </View>
        <View style={styles.bottom}>
          <Button label="Choose a User" onPress={chooseUserButtonPressed} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    ...PARAGRAPH,
    color: TEXT_COLOR,
  },
  name: {
    ...TITLE_H2,
    color: TEXT_COLOR,
  },
  emptyUserText: {
    ...TITLE_H2,
    color: TEXT_GRAY1,
    marginTop: 35,
  },
  top: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 21,
    paddingVertical: 13,
  },
  middle: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 32,
  },
  website: {
    ...TITLE_H2,
    color: PRIMARY,
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  userName: {
    ...TITLE_H1,
    color: TEXT_COLOR,
    marginTop: 53,
  },
  email: {
    ...TITLE_H2,
    color: TEXT_GRAY1,
    marginTop: 8,
  },
});

export default HomeView;
