import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Footer from "../../components/common/Footer";

type UserCredential = {
  email: string;
  password: string;
};
export default function Login() {
  const navigation = useNavigation();

  const [userCredential, setUserCredential] = useState<UserCredential>({
    email: "",
    password: "",
  });

  const [isCredentialValid, setIsCredentialValid] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    setIsCredentialValid({
      email: isEmailOk(userCredential.email),
      password: isPasswordOk(userCredential.password),
    });
  }, [userCredential]);

  //!debug
  useEffect(() => {
    console.log(isCredentialValid);
  }, [isCredentialValid]);

  return (
    <View style={styles.loginScreen}>
      <View>
        <Text style={styles.textContainer}>Welcome</Text>
      </View>
      <View style={styles.inputHolder}>
        <Input
          //Must contain "@, ." and minimum of 5 characters.
          isWrong={!isCredentialValid.email}
          wrongText="Please enter a valid email address"
          onChange={(e) => {
            setUserCredential({
              ...userCredential,
              email: e,
            });
          }}
          icon="Mail"
          placeholder="Your Email"
        />
        <Input
          //Minimum 6 characters and 1 letter.
          isWrong={!isCredentialValid.password}
          wrongText="Please enter a valid password"
          onChange={(e) => {
            setUserCredential({
              ...userCredential,
              password: e,
            });
          }}
          secureTextEntry
          icon="Lock"
          placeholder="Your Password"
        />
      </View>
      <Button
        onPress={() => {
          if (isCredentialValid.email && isCredentialValid.password) 
            navigation.navigate("Home" as never);
          
        }}
        name="LOGIN"
      />
      <Footer
        goTo="SignUp"
        textName="Don't have an account? "
        buttonName="Sign Up"
      />
    </View>
  );
}

function isEmailOk(email: string): boolean {
  let isOk = true;
  if (email.length < 5) isOk = false;

  if (!email.includes("@")) isOk = false;

  if (!email.includes(".")) isOk = false;

  return isOk;
}

function isPasswordOk(password: string): boolean {
  const regexUpperCase = /[ A-Za-z]/;
  const regexNumber = /[0-9]/;
  let isPassordOk = true;
  if (password.length < 6) isPassordOk = false;
  if (!regexUpperCase.test(password)) isPassordOk = false;
  if (!regexNumber.test(password)) isPassordOk = false;
  return isPassordOk;
}

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#2D2D2D",
    flex: 1,
    position: "relative",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  inputHolder: {
    display: "flex",
    marginTop: 80,
    gap: 32,
    marginVertical: 30,
    padding: 20,
  },

  textContainer: {
    fontSize: 40,
    color: "#D78F3C",
    marginTop: 80,
  },
});
