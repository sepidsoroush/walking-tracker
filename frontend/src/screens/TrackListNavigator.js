import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";

const Stack = createStackNavigator();

export default function TrackListNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main List" component={TrackListScreen} />
      <Stack.Screen name="Track Detail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}
