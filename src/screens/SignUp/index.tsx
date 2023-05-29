import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

import { styles } from "./styles";

type UserCredential = {
  email: string;
  password: string;
  username: string;
};

export default function SignUp() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const navigation = useNavigation();

  const [inputErrors, setInputErrors] = useState<{
    email: string | null;
    password: string | null;
    username: string | null;
  }>({
    email: null,
    password: null,
    username: null,
  });

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

  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    if (isButtonPressed) {
      setInputErrors({
        email: !userCredential.email
          ? "Please enter a valid email address."
          : null,
        password: !userCredential.password
          ? "Please enter a valid password."
          : null,
        username: !userCredential.username
          ? "Please enter a valid username."
          : null,
      });
    }
  }, [isButtonPressed, userCredential]);

  const validation = () => {
    if (isCredentialValid.email) return false;

    if (isCredentialValid.email) return false;

    if (!isTermsAccepted) return false;

    return true;
  };

  const handleButtonPress = () => {
    setIsButtonPressed(true);

    if (validation()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Home" as never);
      }, 100);
    }
  };

  return (
    <View style={styles.container}>
      <Title title="Sign Up" />
      <View style={styles.inputContainer}>
        <View>
          <Input
            isWrong={
              !isCredentialValid.email &&
              isButtonPressed &&
              !userCredential.email
            }
            wrongText={isButtonPressed ? inputErrors.email : ""}
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
            isWrong={
              !isCredentialValid.username &&
              isButtonPressed &&
              !userCredential.username
            }
            wrongText={isButtonPressed ? inputErrors.username : ""}
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
            isWrong={
              !isCredentialValid.password &&
              isButtonPressed &&
              !userCredential.password
            }
            wrongText={isButtonPressed ? inputErrors.password : ""}
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
              onValueChange={(value) => {
                setIsChecked(value);
                setIsTermsAccepted(value);
              }}
              // style={!isChecked ? styles.textError : undefined}
            />

            <View style={styles.areaTerms}>
              <Text style={styles.textTerms}>Agree To</Text>
              <TouchableOpacity>
                <Text style={styles.textTermsUnderline}>
                  Terms And Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {!isChecked && !isTermsAccepted && isButtonPressed && (
            <Text style={styles.textError}>Please accept the terms.</Text>
          )}
        </View>

        <Button
          onPress={handleButtonPress}
          isLoading={loading}
          name="create account"
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
