import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/common/Button";

export default function Login() {
  return (
    <View style={styles.loginScreen}>
      <View>
        <Text style={styles.textContainer}>Welcome</Text>
      </View>
      <Button onPress={() => {}} name="LOGIN" />
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#2D2D2D",
    flex: 1,
    alignItems: "center",
  },

  textContainer: {
    fontSize: 40,
    color: "#D78F3C",
    marginTop: 100,
  },
});
