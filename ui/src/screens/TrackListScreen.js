import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const TrackListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Track List screen</Text>
      <Button
        title="Go to Track's Detail"
        type="clear"
        size="sm"
        onPress={() => navigation.navigate("Track Detail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
