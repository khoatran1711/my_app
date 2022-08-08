import react from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import color from "../colors";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";

import imagebackground from "./../../Pictures/background.png";
import lefticon from "./../../Pictures/left_icon.png";
import testproduct from "./../../Pictures/test_product.png";

const width = Dimensions.get("screen").width;

const ProductScreen = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.forProductName}>My new product name</Text>
        <Image style={styles.forProductImage} source={testproduct}></Image>
        <Text style={styles.forProductPrice}> $10.0</Text>
        <Text style={styles.forProductDesciption}>
          {" "}
          Description about the cake is that it is Description about the cake is
          that it is{" "}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProductScreen;
