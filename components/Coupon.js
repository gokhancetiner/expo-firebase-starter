import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Card from "./Card";
import Colors from "../utils/colors";

const Coupon = (props) => {
  return (
    <Card style={{ margin: 10 }}>
      <View style={styles.container}>
        <View style={styles.league}>
          <Text style={{ color: Colors.primaryText }}>Spain LaLigas</Text>
        </View>
        <View style={styles.teams}>
          <View style={{ flex: 2 }}>
            <Text style={{ alignItems: "flex-start", color: Colors.text }}>
              Valencia
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ color: Colors.text }}>0</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text style={{ color: Colors.text }}>0</Text>
          </View>
          <View style={{ flex: 2, alignItems: "flex-end" }}>
            <Text style={{ color: Colors.text }}>Levante</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{ backgroundColor: "green", padding: 5, color: "white" }}
          >
            Over +1.5 Goal
          </Text>
          <Text
            style={{ backgroundColor: "yellow", padding: 5, color: "black" }}
          >
            1.35
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryDark,
  },
  league: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: Colors.accent,
    padding: 5,
  },
  teams: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    padding: 10,
    marginTop: 10,
  },
});

export default Coupon;
