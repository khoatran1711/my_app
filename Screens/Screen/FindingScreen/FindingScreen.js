import react from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import color from "../colors";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../FindingScreen/style";

import imagebackground from "./../../Pictures/background.png";
import usericon from "./../../Pictures/user_icon.png";
import searchicon from "./../../Pictures/search_icon.png";
import line from "./../../Pictures/product_background.png";
import productbackground from "./../../Pictures/product_background.png";
import testproduct from "./../../Pictures/test_product.png";
import lefticon from "./../../Pictures/left_icon.png";

const width = Dimensions.get("screen").width;
const FindingScreen = ({ navigation }) => {
  console.log(width);
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
        <View style={styles.forFindingArea}>
          <TextInput
            style={styles.forFindingInput}
            placeholder="Find your product"
          ></TextInput>
          <TouchableOpacity>
            <Image source={searchicon} style={styles.forSearchIcon}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.forNumberofResult}> 3 results are found</Text>
        <Image source={line} style={styles.forLine}></Image>
        <View style={styles.forResultArea}>
          <View style={styles.forResultContainer}>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forFindingProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forFindingProductImage}
                ></Image>
                <View style={styles.forFindingProductInfo}>
                  <Text style={styles.forFindingProductName}>
                    My new product
                  </Text>
                  <Text style={styles.forFindingProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forFindingProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is Description about
                    the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.forResultContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Product")}>
              <ImageBackground
                source={productbackground}
                style={styles.forFindingProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forFindingProductImage}
                ></Image>
                <View style={styles.forFindingProductInfo}>
                  <Text style={styles.forFindingProductName}>
                    My new product
                  </Text>
                  <Text style={styles.forFindingProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forFindingProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is Description about
                    the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.forResultContainer}>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forFindingProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forFindingProductImage}
                ></Image>
                <View style={styles.forFindingProductInfo}>
                  <Text style={styles.forFindingProductName}>
                    My new product
                  </Text>
                  <Text style={styles.forFindingProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forFindingProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is Description about
                    the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FindingScreen;
