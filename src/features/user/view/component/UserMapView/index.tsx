import { StyleSheet } from 'react-native';
import MapView, { MapEvent, Marker } from 'react-native-maps';
import React from 'react';
import { UserI } from '~features/user/data/model/user';
import images from '~features/user/assets/images';

type Props = {
  initLat: number;
  initLng: number;
  users: UserI[];
  markerOnPress?: (userId?: string) => void;
};

const UserMapView = ({
  initLat,
  initLng,
  users = [],
  markerOnPress = () => {},
}: Props) => {
  const handleMarkerOnPress = function (event: MapEvent) {
    markerOnPress(event.nativeEvent.id);
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: initLat,
        longitude: initLng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {users.map(user => (
        <Marker
          identifier={user.id.toString()}
          key={user.id}
          coordinate={{
            latitude: parseFloat(user.location.lat),
            longitude: parseFloat(user.location.lng),
          }}
          onPress={handleMarkerOnPress}
          image={images.ic_marker}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flexGrow: 1,
  },
});

export default UserMapView;
