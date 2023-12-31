import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, [navigation, clearErrorMessage]);

  return (
    <View style={styles.container}>
      <AuthForm
        title="Sign In to Your Account"
        type="Sign in"
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
