// import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "@rneui/themed";
import Map from "../components/Map";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const response = await requestForegroundPermissionsAsync();
      !response.granted ? setErr(response) : null;
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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
