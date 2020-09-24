import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import Colors from "../utils/colors";
import SafeView from "../components/SafeView";
import Form from "../components/Forms/Form";
import FormField from "../components/Forms/FormField";
import FormButton from "../components/Forms/FormButton";
import FormErrorMessage from "../components/Forms/FormErrorMessage";
import { registerWithEmail } from "../components/Firebase/firebase";
import useStatusBar from "../hooks/useStatusBar";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  description: Yup.string().required().label("Description"),
  price: Yup.number().required().label("Price"),
});

const NewChannelScreen = (props) => {
  useStatusBar("light-content");
  const [registerError, setRegisterError] = useState("");

  const handleCreateNewChannel = (values, actions) => {
    const { name, description, price } = values;
    console.log(name);
    console.log(description);
    console.log(price);
  };

  return (
    <SafeView style={styles.container}>
      <Form
        initialValues={{
          name: "",
          description: "",
          price: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleCreateNewChannel(values)}
      >
        <FormField
          name="name"
          leftIcon="account"
          placeholder="Enter name"
          autoFocus={true}
        />
        <FormField
          name="description"
          leftIcon="alpha-d-box-outline"
          placeholder="Enter description"
          autoCapitalize="none"
        />
        <FormField
          name="price"
          leftIcon="currency-usd"
          placeholder="Enter price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <FormButton title={"Create New Channel"} />
        {<FormErrorMessage error={registerError} visible={true} />}
      </Form>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default NewChannelScreen;
