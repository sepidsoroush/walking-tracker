import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import AuthForm from "../components/AuthForm";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AuthForm
        title="Sign in"
        onSubmit={() => {
          console.log("signin!");
        }}
      />
      <Button
        title="Don't have an account? Go back to sign up"
        type="clear"
        size="sm"
        onPress={() => navigation.navigate("Signup")}
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

export default SigninScreen;
