import React, { useEffect, useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = () => {
  const navigation = useNavigation();
  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchTracks();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Track Detail", { _id: item._id })
              }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default TrackListScreen;
