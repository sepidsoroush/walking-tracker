import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text h3 style={styles.title}>
        Account Screen
      </Text>
      <Spacer>
        <Button
          onPress={signout}
          title="Sign Out"
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
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default AccountScreen;
