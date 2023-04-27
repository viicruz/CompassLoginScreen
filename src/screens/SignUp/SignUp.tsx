import { useState, useEffect } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "expo-checkbox";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Footer from "../../components/common/Footer";

type UserCredential = {
  email: string;
  password: string;
  username: string;
};

export default function SignUp() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigation = useNavigation();

  const [userCredential, setUserCredential] = useState<UserCredential>({
    email: "",
    password: "",
    username: "",
  });

  const [isCredentialValid, setIsCredentialValid] = useState({
    email: false,
    password: false,
    username: false,
  });

  useEffect(() => {
    setIsCredentialValid({
      email: isEmailOk(userCredential.email),
      password: isPasswordOk(userCredential.password),
      username: isUsernameOk(userCredential.username),
    });
  }, [userCredential]);

  //!debug
  useEffect(() => {
    console.log(isCredentialValid);
  }, [isCredentialValid]);

  return (
    <View style={styles.signUpScreen}>
      <View style={styles.header}>
        <Text style={styles.textContainer}>Sign Up</Text>
      </View>
      <View style={styles.signUpForm}>
        <View style={styles.inputHolder}>
          <Input
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
            isWrong={!isCredentialValid.username}
            wrongText="Please enter a valid Username"
            onChange={(e) => {
              setUserCredential({
                ...userCredential,
                username: e,
              });
            }}
            icon="User"
            placeholder="Username"
          />

          <Input
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

        <View style={styles.checkboxWrapper}>
          <View style={styles.CheckBoxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              style={!isChecked && { borderColor: "#FF4B4B" }}
            />

            <Text style={{ color: "#F5F5F5" }}>
              Agree To Terms And Conditions
            </Text>
          </View>

          {!isChecked && (
            <Text
              style={{ color: "#FF4B4B", marginLeft: 16 }}
              children="Please accept the terms"
            />
          )}
        </View>

        <Button
          onPress={() => {
            navigation.navigate("Home" as never);
          }}
          name="CREATE ACCOUNT"
        />
         
      </View>

      <KeyboardAvoidingView style={styles.footerContainer} behavior="height">
          <Footer buttonName="Sign In" />
        </KeyboardAvoidingView>

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

function isUsernameOk(username: string): boolean {
  let isUserOk = true;
  if (username.length <= 2) isUserOk = false;
  return isUserOk;
}

const styles = StyleSheet.create({
  signUpScreen: {
    
    backgroundColor: "#2D2D2D",
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 40,
  },

  signUpForm: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  inputHolder: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },

  textContainer: {
    fontSize: 40,
    color: "#D78F3C",
  },
  CheckBoxContainer: {
    width: "100%",
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
  },

  //remove layout shift
  checkboxWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: 100,
  },

  footerContainer: {
  width:"100%"
  },

  
});
