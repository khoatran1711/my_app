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
import lefticon from "./../../Pictures/left_icon.png";
import test_product from "./../../Pictures/test_product.png";

const AddingScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function showimage() {
    console.log("myimage", image);
  }

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <TextInput style={styles.forAddingInput} value="ID"></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Name"
          placeholderTextColor={color.yellow}
        ></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Price"
          placeholderTextColor={color.yellow}
        ></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Description Description Description Description "
          placeholderTextColor={color.yellow}
        ></TextInput>
        <TextInput
          style={styles.forAddingInput}
          placeholder="Category"
          placeholderTextColor={color.yellow}
        ></TextInput>
        <TouchableOpacity
          style={styles.forButton}
          title="Upload Photo"
          onPress={pickImage}
        >
          <Text style={styles.forTextInOpaTouch}>Upload Image</Text>
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={styles.forChaningImage} />
        )}
        <TouchableOpacity style={styles.forButton}>
          <Text style={styles.forTextInOpaTouch}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddingScreen;
