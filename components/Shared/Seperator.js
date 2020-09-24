import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  separator: {
    borderColor: colors.mediumGrey,
    borderWidth: 0.8,
    flexDirection: "row",
    flex: 1,
  },
});

const Separator = () => (
  <View style={styles.container}>
    <View style={styles.separator} />
  </View>
);

export default Separator;
