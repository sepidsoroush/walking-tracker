import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackListNavigator from "./src/screens/TrackListNavigator";

import { Context as AuthContext } from "./src/context/AuthContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <NavigationContainer>
      {state.token ? (
        <Tab.Navigator
          initialRouteName="Track List"
          screenOptions={{
            tabBarActiveTintColor: "#e91e63",
          }}
        >
          <Tab.Screen
            name="Track List"
            component={TrackListNavigator}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={24} color={color} />
              ),
              tabBarLabelStyle: { fontSize: 12 },
            }}
          />
          <Tab.Screen
            name="Create Track"
            component={TrackCreateScreen}
            options={{
              tabBarLabel: "Create",
              tabBarIcon: ({ color }) => (
                <Ionicons name="location-sharp" size={24} color={color} />
              ),
              tabBarLabelStyle: { fontSize: 12 },
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: ({ color }) => (
                <Ionicons name="settings" size={24} color={color} />
              ),
              tabBarLabelStyle: { fontSize: 12 },
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Signup"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
