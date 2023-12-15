import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "./Spacer";

const AuthForm = ({ title, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={styles.title}>
          {title} Screen
        </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          leftIcon={<FontAwesome name="envelope" size={20} color="gray" />}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          leftIcon={<FontAwesome name="lock" size={24} color="gray" />}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          onPress={() => onSubmit({ email, password })}
          title={title}
          buttonStyle={{
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    // marginLeft: 15,
    marginTop: 15,
    textAlign: "center",
  },
});

export default AuthForm;
