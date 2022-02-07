import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../Button';
import { COLOR_WHITE, TEXT_COLOR } from '~core/themes/colors';
import { LABEL_REGULAR, TITLE3_BOLD } from '~core/themes/typography';

type Props = {
  yesLabel: string;
  noLabel?: string;
  onPressYes: () => void;
  onPressNo?: () => void;
  title: string;
  description: string;
};

const Dialog = ({
  yesLabel,
  noLabel,
  onPressYes,
  onPressNo = () => {},
  title,
  description,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.buttonContainer}>
        {noLabel ? (
          <Button
            label={noLabel}
            onPress={onPressNo}
            customContainerStyle={styles.noButton}
          />
        ) : (
          <View style={styles.noButton} />
        )}
        <Button
          label={yesLabel}
          onPress={onPressYes}
          customContainerStyle={styles.yesButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 10,
    padding: 16,
    width: '80%',
  },
  title: {
    ...TITLE3_BOLD,
    color: TEXT_COLOR,
    marginBottom: 12,
  },
  desc: {
    ...LABEL_REGULAR,
    color: TEXT_COLOR,
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noButton: {
    flex: 1,
    marginRight: 8,
  },
  yesButton: {
    flex: 1,
    marginLeft: 8,
  },
});

export default Dialog;
