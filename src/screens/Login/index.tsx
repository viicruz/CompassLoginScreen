import { useState, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Footer from "../../components/Footer";

// Styles same as SignUp screen
import { styles } from "../SignUp/styles";
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
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);

  useEffect(() => {
    setIsCredentialValid({
      email: isEmailOk(userCredential.email),
      password: isPasswordOk(userCredential.password),
    });
  }, [userCredential]);

  const handleButtonPress = () => {
    setIsButtonPressed(true);

    if (isCredentialValid.email && isCredentialValid.password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Home" as never);
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Title title="Welcome" />
      <View style={styles.inputContainer}>
        <Input
          isWrong={!isCredentialValid.email && isButtonPressed}
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
          isWrong={!isCredentialValid.password && isButtonPressed}
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
          onPress={handleButtonPress}
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
  let isPasswordOk = true;
  if (password.length < 6) isPasswordOk = false;
  if (!regexUpperCase.test(password)) isPasswordOk = false;
  if (!regexNumber.test(password)) isPasswordOk = false;
  return isPasswordOk;
}
