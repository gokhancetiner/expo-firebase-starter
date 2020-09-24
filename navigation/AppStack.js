import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

import { View, Button } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen, { profileScreenOptions } from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import NewChannelScreen from "../screens/NewChannelScreen";

import { logout } from "../components/Firebase/firebase";

const Drawer = createDrawerNavigator();

const ProfileStackNavigator = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={profileScreenOptions}
      />
      <ProfileStackNavigator.Screen
        name="EditProfile"
        component={EditProfileScreen}
      />
      <ProfileStackNavigator.Screen
        name="NewChannel"
        component={NewChannelScreen}
      />
    </ProfileStackNavigator.Navigator>
  );
};
export default function AppStack() {
  async function handleSignOut() {
    try {
      console.log("Drawer logout");
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  /* return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  ); */
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={(props) => {
        return (
          <SafeAreaView
            style={{ flex: 1, paddingTop: 20, justifyContent: "space-between" }}
          >
            <View>
              <DrawerItemList {...props} />
            </View>
            <View style={{ paddingBottom: 50 }}>
              <Button title="Logout" onPress={handleSignOut} />
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
