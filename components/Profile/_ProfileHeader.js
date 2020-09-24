import React from "react";

import { Icon } from "react-native-elements";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import colors from "../../utils/colors";

const ProfileHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerColumn}>
        <Image
          style={styles.userImage}
          source={{ uri: "https://picsum.photos/id/1005/200/300" }}
        />
        <Text style={styles.userNameText}>Gokhan</Text>
        <View style={styles.userAddressRow}>
          <View>
            <Icon
              name="place"
              underlayColor="transparent"
              iconStyle={styles.placeIcon}
              onPress={() => {}}
            />
          </View>
          <View style={styles.userCityRow}>
            <Text style={styles.userCityText}>London, United Kingdom</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: colors.black,
    fontSize: 22,
    paddingBottom: 8,
    textAlign: "center",
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  userCityRow: {
    backgroundColor: "transparent",
  },
  userCityText: {
    color: colors.mediumGrey,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  placeIcon: {
    color: colors.mediumGrey,
    fontSize: 26,
  },
});

export default ProfileHeader;
