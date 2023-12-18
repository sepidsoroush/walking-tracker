import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (i = 0; i < 20; i++) {
    points.push({
      latitude: 59.449900154120925 - i * 0.001,
      longitude: 24.735824004577633 - i * 0.001,
    });
  }
  return (
    <MapView
      initialRegion={{
        latitude: 59.449900154120925,
        longitude: 24.735824004577633,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
