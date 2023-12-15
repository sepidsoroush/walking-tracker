import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import AuthForm from "../components/AuthForm";

import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AuthForm
        title="Sign up"
        onSubmit={() => {
          console.log("signup!");
        }}
      />
      <Button
        title="Already have an account? Sign in instead"
        type="clear"
        size="sm"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
