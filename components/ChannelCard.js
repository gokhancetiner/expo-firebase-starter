import React from "react";
import { PricingCard } from "react-native-elements";
import colors from "../utils/colors";

const ChannelCard = (props) => {
  return (
    <PricingCard
      color={colors.primary}
      title={props.channel.name}
      price={`${props.channel.price}$`}
      info={[
        `${props.channel.subscriberCount} subscriber`,
        `%${props.channel.accuracyRate} accuracy`,
      ]}
      button={{ title: "Subscribe" }}
    />
  );
};

export default ChannelCard;
