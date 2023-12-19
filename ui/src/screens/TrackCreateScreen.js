import "../_mockLocation";
import React, { useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import useLocation from "../hooks/useLocation";

import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";

import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation(isFocused, addLocation);

  return (
    <View>
      <Text h3 style={styles.title}>
        Create a Track
      </Text>
      <Spacer>
        <Map />
        {err && <Text>Please enable location services.</Text>}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
