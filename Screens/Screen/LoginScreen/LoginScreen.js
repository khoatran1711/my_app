import react from "react";
import React from "react";
import { useState } from "react";
import { StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";

import { UseGetUser } from "../../../Data_query/Query.queries";

import imagebackground from "./../../Pictures/background.png";
import title from "./../../Pictures/title.png";
import logo from "./../../Pictures/logo.png";
import account from "./../../Pictures/account.png";
import password from "./../../Pictures/password.png";

var account_value = "";
var password_value = "";

//console.log(myHookValue);

const LoginScreen = ({ navigation }) => {
  global.navigationScreen = navigation;
  const withMyHook = UseGetUser(account_text);
  const [account_text, setAccount] = useState("");
  const [password_text, setPassword] = useState("");

  function account_change(new_text) {
    setAccount(new_text);
    account_value = new_text;
    global.account = new_text;
  }
  function password_change(new_text) {
    setPassword(new_text);
    password_value = password_text;
    global.password = new_text;
  }

  //var UserList = UseGetUser();
  //console.log(UserList);

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
          onChangeText={account_change}
        ></TextInput>
      </View>
      <View style={styles.forInputComponent}>
        <Image source={password} style={styles.forIcon} />
        <TextInput
          style={styles.forInputText}
          placeholder="Your password"
          placeholderTextColor="white"
          onChangeText={password_change}
        ></TextInput>
      </View>
      <Text style={styles.forSuggestion}>Forgot your password?</Text>
      {withMyHook}
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
