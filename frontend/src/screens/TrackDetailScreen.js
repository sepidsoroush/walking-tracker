import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline, Circle } from "react-native-maps";

const TrackDetailScreen = ({ route }) => {
  const id = route.params._id;
  const { state } = useContext(TrackContext);

  const track = state.find((track) => track._id === id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Spacer>
        <Text h4 style={styles.title}>
          {track.name}
        </Text>
      </Spacer>

      <MapView
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  map: {
    height: 300,
    marginHorizontal: 10,
  },
});

export default TrackDetailScreen;
