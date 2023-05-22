import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "expo-checkbox";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Footer from "../../components/common/Footer";

import { styles } from "./styles";

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
            //Minimum 3 characters.
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
            if (
              isCredentialValid.email &&
              isCredentialValid.password &&
              isCredentialValid.username &&
              isChecked
            )
              navigation.navigate("Home" as never);
          }}
          name="CREATE ACCOUNT"
        />
      </View>

      <Footer
        textName="Already have an account? "
        goTo="Login"
        buttonName="Sign In"
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

function isUsernameOk(username: string): boolean {
  let isUserOk = true;
  if (username.length <= 2) isUserOk = false;
  return isUserOk;
}