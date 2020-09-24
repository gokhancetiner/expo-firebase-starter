import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import colors from "../../utils/colors";

const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View style={styles.userImage}>
          <Avatar
            width={145}
            height={145}
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
            }}
            activeOpacity={0.7}
            avatarStyle={{ borderRadius: 145 / 2 }}
            overlayContainerStyle={{ backgroundColor: "transparent" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: colors.black,
                marginLeft: -15,
              }}
            >
              Gokhan Cetiner
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 300,
          borderWidth: 0.5,
          borderColor: "rgba(222, 223, 226, 1)",
          marginHorizontal: 20,
          height: 1,
          marginVertical: 10,
        }}
      />
      <View>
        <Button
          title="Create New Channel"
          type="clear"
          onPress={() => {
            navigation.navigate("NewChannel");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 10,
    height: 250,
    marginBottom: 10,
  },
  userImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileHeader;
