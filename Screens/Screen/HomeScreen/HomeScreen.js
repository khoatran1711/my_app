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
import usericon from "./../../Pictures/user_icon.png";
import searchicon from "./../../Pictures/search_icon.png";
import homebanner from "./../../Pictures/home_banner.png";
import newicon from "./../../Pictures/new_icon.png";
import hoticon from "./../../Pictures/hot_icon.png";
import cakeicon from "./../../Pictures/cake_icon.png";
import wineicon from "./../../Pictures/wine_icon.png";
import dishicon from "./../../Pictures/dish_icon.png";
import coffeeicon from "./../../Pictures/coffee_icon.png";
import hottile from "./../../Pictures/hot_title.png";
import productbackground from "./../../Pictures/product_background.png";
import testproduct from "./../../Pictures/test_product.png";

const width = Dimensions.get("window").width;
const HomeScreen = ({ navigation }) => {
  console.log(color);
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
        <View style={styles.forFindingArea}>
          <TouchableOpacity onPress={() => navigation.navigate("UserInfo")}>
            <Image source={usericon} style={styles.forUserIcon}></Image>
          </TouchableOpacity>
          <TextInput
            style={styles.forFindingInput}
            placeholder="Find your product"
          ></TextInput>
          <TouchableOpacity onPress={() => navigation.navigate("Finding")}>
            <Image source={searchicon} style={styles.forSearchIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.forBannerContainer}>
          <Image source={homebanner} style={styles.forBanner}></Image>
        </View>
        <View style={styles.forCategoryContainer}>
          <View style={styles.forCategory1Container}>
            <TouchableOpacity style={styles.forCatgory1}>
              <Image source={newicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forCatgory1}>
              <Image source={hoticon} style={styles.forIcon}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.forCategory2Container}>
            <TouchableOpacity style={styles.forCatgory2}>
              <Image source={cakeicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forCatgory2}>
              <Image source={wineicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forCatgory2}>
              <Image source={dishicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forCatgory2}>
              <Image source={coffeeicon} style={styles.forIcon}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.forHotProductArea}>
          <Image source={hottile} style={styles.forHottile}></Image>

          <View style={styles.forHotProductsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Product")}>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is Description about
                    the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={productbackground}
                style={styles.forHotProductContainer}
              >
                <Image
                  source={testproduct}
                  style={styles.forHotProductImage}
                ></Image>
                <View style={styles.forHotProductInfo}>
                  <Text style={styles.forHotProductName}>My new product</Text>
                  <Text style={styles.forHotProductPrice}>$10.0</Text>
                  <Text
                    style={styles.forHotProductDescription}
                    numberOfLines={3}
                  >
                    Description about the cake is that it is
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

export default HomeScreen;
