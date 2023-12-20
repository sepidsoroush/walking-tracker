import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/native";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const navigation = useNavigation();
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  const saveTrackHandler = () => {
    saveTrack();
    navigation.navigate("Track List");
  };

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      {recording ? (
        <Button
          title="Stop"
          onPress={stopRecording}
          buttonStyle={{
            backgroundColor: "rgba(214, 61, 57, 1)",
            borderRadius: 30,
          }}
          containerStyle={{
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
        />
      ) : (
        <Button
          title="Start Recording"
          onPress={startRecording}
          buttonStyle={{
            backgroundColor: "rgba(127, 220, 103, 1)",
            borderRadius: 30,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
          containerStyle={{
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      )}
      {!recording && locations.length ? (
        <Button
          title="Save Recording"
          onPress={saveTrackHandler}
          buttonStyle={{
            backgroundColor: "black",
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
