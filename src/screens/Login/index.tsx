import { useState, useEffect } from "react";
import { View, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Footer from "../../components/Footer";

import { styles } from "./styles";
import Title from "../../components/Title";

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

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsCredentialValid({
      email: isEmailOk(userCredential.email),
      password: isPasswordOk(userCredential.password),
    });
  }, [userCredential]);

  return (
    <View style={styles.container}>
      <Title title="Welcome" />
      <View style={styles.inputContainer}>
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

        <Button
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              if (isCredentialValid.email && isCredentialValid.password)
                navigation.navigate("Home" as never);
            }, 3000);
          }}
          isLoading={loading}
          name="Login"
        />
      </View>
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
