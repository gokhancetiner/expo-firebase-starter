import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet, View } from "react-native";
import { Avatar, Accessory } from "react-native-elements";

import SafeView from "../components/SafeView";
import Form from "../components/Forms/Form";
import FormField from "../components/Forms/FormField";
import FormButton from "../components/Forms/FormButton";
import FormErrorMessage from "../components/Forms/FormErrorMessage";
import Colors from "../utils/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
});

const EditProfileScreen = () => {
  const [registerError] = useState("");
  return (
    <SafeView style={styles.container}>
      <View style={styles.userImage}>
        <Avatar
          width={145}
          height={145}
          source={{
            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
          }}
          avatarStyle={{ borderRadius: 145 / 2 }}
        >
          <Accessory
            size={30}
            onPress={() => {
              console.log("Pressed");
            }}
          />
        </Avatar>
      </View>
      <Form
        initialValues={{
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
      >
        <FormField
          name="name"
          leftIcon="account"
          placeholder="Enter name"
          autoFocus={true}
        />
        <FormButton title={"Update Profile"} />
        {<FormErrorMessage error={registerError} visible={true} />}
      </Form>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "flex-start",
  },
  userImage: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
});

export default EditProfileScreen;
