import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Footer from "../../components/common/Footer";

export default function Login() {
  return (
    <View style={styles.loginScreen}>
      <View>
        <Text style={styles.textContainer}>Welcome</Text>
      </View>
      <Input icon="Mail" placeholder="Your Email"/>
      <Input secureTextEntry icon="Lock" placeholder="Your Password" />
      <Button onPress={() => {}} name="LOGIN" />
      <Footer buttonName="Sign In"/>
    </View>

  );
}

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#2D2D2D",
    flex: 1,
    alignItems: "center",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },

  textContainer: {
    fontSize: 40,
    color: "#D78F3C",
    marginTop: 100,
  },
});
