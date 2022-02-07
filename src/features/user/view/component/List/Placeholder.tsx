import { View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-2';
import { scaleWidth } from '~core/themes/mixins';
import { BORDER_GREY16 } from '~core/themes/colors';

const Placeholder = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderBottomColor: BORDER_GREY16,
          borderBottomWidth: 1,
          paddingVertical: 16,
          paddingHorizontal: 18,
          marginHorizontal: 21,
        }}>
        <SkeletonPlaceholder.Item
          width={scaleWidth(49)}
          height={scaleWidth(49)}
          borderRadius={scaleWidth(49 / 2)}
        />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 20,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <SkeletonPlaceholder.Item
            width={scaleWidth(251)}
            height={scaleWidth(24)}
          />
          <SkeletonPlaceholder.Item
            marginTop={4}
            width={scaleWidth(115)}
            height={scaleWidth(15)}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Placeholder;
