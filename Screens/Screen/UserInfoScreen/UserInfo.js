import react from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import color from "../colors";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UseGetUserInfo } from "../../../Data_query/Query.queries";

import styles from "./style";

import imagebackground from "./../../Pictures/background.png";
import lefticon from "./../../Pictures/left_icon.png";
import hellobanner from "./../../Pictures/hello_banner.png";

const width = Dimensions.get("screen").width;
const UserInfo = ({ navigation }) => {
  const information = UseGetUserInfo();
  console.log("my infor", information);
  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: "100%",
        height: "100%",
        alignSelf: "flex-start",
        position: "absolute",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
      }}
    >
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <Image source={hellobanner} style={styles.forHelloBanner}></Image>
        <Text style={styles.forWelcomeTitle}>
          {" "}
          Welcome back, {information.user_name}
        </Text>
        <Text style={styles.forUserInfoTitle}>Your Name</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.user_name}
        ></TextInput>
        <Text style={styles.forUserInfoTitle}>Your Phone</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.user_phone}
        ></TextInput>
        <Text style={styles.forUserInfoTitle}>Your Mail</Text>
        <TextInput
          style={styles.forUserInputInfo}
          defaultValue={information.user_mail}
        ></TextInput>
        <Text style={styles.forUserInfoTitle}>Your New Password</Text>
        <TextInput style={styles.forUserInputInfo}></TextInput>
        <TouchableOpacity style={styles.forButtonChange}>
          <Text
            style={{
              textAlign: "center",
              color: color.dark_brown,
              fontSize: (width * 5) / 100,
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default UserInfo;
