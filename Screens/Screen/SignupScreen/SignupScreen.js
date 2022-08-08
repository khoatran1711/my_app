import react from "react";
import { StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import styles from "./style";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import imagebackground from "./../../Pictures/background.png";
import title from "./../../Pictures/title_signup.png";
import logo from "./../../Pictures/logo_signup.png";
import account from "./../../Pictures/account.png";
import password from "./../../Pictures/password.png";
import email from "./../../Pictures/email.png";
import phone from "./../../Pictures/phone-call.png";

const SignupScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Image source={title} style={styles.forImage} />
      </View>

      <View style={styles.forInputComponent}>
        <Image source={account} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your account"
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <View style={styles.forInputComponent}>
        <Image source={password} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your password"
          placeholderTextColor="white"
        ></TextInput>
      </View>

      <View style={styles.forInputComponent}>
        <Image source={email} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your email"
          placeholderTextColor="white"
        ></TextInput>
      </View>

      <View style={styles.forInputComponent}>
        <Image source={phone} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your phone"
          placeholderTextColor="white"
        ></TextInput>
      </View>

      <Text
        style={styles.forSuggestion}
        onPress={() => navigation.navigate("Login")}
      >
        Your already have an account? Login now{" "}
      </Text>

      <TouchableOpacity title="Login" style={styles.forButton}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          width: "100%",
          flexDirection: "row",
          marginBottom: "5%",
        }}
      >
        <Image source={logo} style={styles.forLogo} />
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;