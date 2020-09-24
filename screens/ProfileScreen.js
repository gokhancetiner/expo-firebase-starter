import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Platform, ScrollView } from "react-native";

import HeaderButton from "../components/HeaderButton";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileChannels from "../components/Profile/ProfileChannels";
import Seperator from "../components/Shared/Seperator";

const ProfileScreen = (props) => {
  return (
    <>
      <ScrollView style={{ marginTop: 15 }}>
        <ProfileHeader navigation={props.navigation}></ProfileHeader>
        <Seperator></Seperator>
        <ProfileChannels></ProfileChannels>
      </ScrollView>
    </>
  );
};

export const profileScreenOptions = (navData) => {
  return {
    headerTitle: "Profile",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => navData.navigation.navigate("EditProfile")}
        />
      </HeaderButtons>
    ),
  };
};

export default ProfileScreen;
