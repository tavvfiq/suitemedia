import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import User from '~features/user/data/model/user';
import { CircleAvatar } from '~common/view/component/Avatar';
import { SMALL_PARAGRAPH, TITLE_H3 } from '~core/themes/typography';
import { BORDER_GREY16, INACTIVE_TEXT, TEXT_COLOR } from '~core/themes/colors';
import { PressableOpacity } from '~common/view/component/PressableOpacity';

type Props = {
  user: User;
  onPress: (user: User) => void;
};

const List = ({ user, onPress }: Props) => {
  const { first_name, last_name, email, avatar } = user.toJson();
  const handleOnPress = function () {
    onPress(user);
  };

  return (
    <PressableOpacity style={styles.container} onPress={handleOnPress}>
      <CircleAvatar size="xsmall" image={avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
        <Text style={styles.email}>{email.toUpperCase()}</Text>
      </View>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: BORDER_GREY16,
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginHorizontal: 21,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  name: {
    ...TITLE_H3,
    color: TEXT_COLOR,
  },
  email: {
    ...SMALL_PARAGRAPH,
    color: INACTIVE_TEXT,
    marginTop: 4,
  },
});

export default List;
