import React from "react";
import { View } from "react-native";
import ChannelCard from "../ChannelCard";

const ProfileChannels = () => {
  const channels = [
    {
      name: "Free",
      price: "30",
      subscriberCount: "164",
      accuracyRate: "74",
    },
    {
      name: "VIP",
      price: "40",
      subscriberCount: "87",
      accuracyRate: "83",
    },
    {
      name: "Elite",
      price: "50",
      subscriberCount: "67",
      accuracyRate: "91",
    },
  ];
  return (
    <View>
      {channels.map((item, index) => (
        <ChannelCard channel={item} key={index}></ChannelCard>
      ))}
    </View>
  );
};

export default ProfileChannels;
