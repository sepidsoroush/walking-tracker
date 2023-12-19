import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);
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
            borderRadius: 5,
          }}
          containerStyle={{
            height: 40,
            marginHorizontal: 50,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
        />
      ) : (
        <Button
          title="Start Recording"
          onPress={startRecording}
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(127, 220, 103, 1)",
            borderRadius: 5,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
