import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <View>
      <Text h3 style={styles.title}>
        Create a Track
      </Text>
      <Spacer>
        <Map />
        {err && <Text>Please enable location services.</Text>}
      </Spacer>
      <TrackForm />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default TrackCreateScreen;
