import react from "react";
import { StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";

import imagebackground from "./../../Pictures/background.png";
import title from "./../../Pictures/title.png";
import logo from "./../../Pictures/logo.png";
import account from "./../../Pictures/account.png";
import password from "./../../Pictures/password.png";

const LoginScreen = ({ navigation }) => {
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
      <Text style={styles.forSuggestion}>Forgot your password?</Text>
      <TouchableOpacity
        title="Login"
        style={styles.forButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.forCreateAccount}
        onPress={() => navigation.navigate("Signup")}
      >
        You dont have an account ? Create now
      </Text>
    </ImageBackground>
  );
};

export default LoginScreen;
