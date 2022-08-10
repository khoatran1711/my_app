import react from "react";
import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchImageLibrary } from "react-native-image-picker";
import styles from "./style";
import color from "../colors";
import * as ImagePicker from "expo-image-picker";

import imagebackground from "./../../Pictures/background_manage.png";
import testproduct from "./../../Pictures/test_product.png";
import productbackground from "./../../Pictures/product_background.png";

const HomeMangeScreen = () => {
  return (
    <ImageBackground
      source={imagebackground}
      style={{
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
      }}
    >
      <ScrollView>
        <TouchableOpacity style={styles.forButton}>
          <Text style={styles.forTextInOpaTouch}>New Product</Text>
        </TouchableOpacity>
        <View style={styles.forFindingProductContainer}>
          <TextInput
            placeholder="Find your Product"
            placeholderTextColor={color.yellow}
            style={styles.forInputProduct}
          ></TextInput>
          <TouchableOpacity style={styles.forInputProductButton}>
            <Text style={styles.forTextInOpaTouch}>Find</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forProductListContainer}>
          <Text style={styles.forProductListTitle}>Product List</Text>
          <View style={styles.forProductArea}>
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeMangeScreen;
