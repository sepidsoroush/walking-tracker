import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AuthForm
        title="Sign in"
        onSubmit={signin}
        errorMessage={state.errorMessage}
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
