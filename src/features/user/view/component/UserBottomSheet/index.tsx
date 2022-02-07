import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR_WHITE, TEXT_COLOR } from '~core/themes/colors';
import { CircleAvatar } from '~common/view/component/Avatar';
import { UserI } from '~features/user/data/model/user';
import Button from '~common/view/component/Button';
import { TITLE_H3 } from '~core/themes/typography';

type Props = {
  user: UserI;
  selectOnPress: () => void;
};

const UserBottomSheet = ({ user, selectOnPress }: Props) => {
  return (
    <View style={styles.container}>
      <CircleAvatar image={user.avatar} />
      <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
      <Button
        customContainerStyle={styles.button}
        label="Select"
        onPress={selectOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 28,
    backgroundColor: COLOR_WHITE,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  name: {
    ...TITLE_H3,
    color: TEXT_COLOR,
    marginTop: 15,
  },
  button: {
    marginTop: 33,
  },
});

export default UserBottomSheet;
