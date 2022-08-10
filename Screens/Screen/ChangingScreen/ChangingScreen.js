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

import { UsePutProduct } from "../../../Data_query/Query.queries";
import { UseGetAProduct } from "../../../Data_query/Query.queries";
import { UseDeleteProduct } from "../../../Data_query/Query.queries";

import imagebackground from "./../../Pictures/background_manage.png";
import lefticon from "./../../Pictures/left_icon.png";
import test_product from "./../../Pictures/test_product.png";

var options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};
const ChangingScreen = ({ route, navigation }) => {
  const product_id = route.params.id_product;
  const product = UseGetAProduct(product_id);
  global.changingproduct = product;
  const old_product = UseGetAProduct(product_id);
  const [image, setImage] = useState(null);
  const [name_text, setName_text] = useState(product.name_product);
  const [price_text, setPrice_value] = useState(product.price_product);
  const [description_text, setDescription_text] = useState(
    product.description_product
  );
  const [category_text, setCategory_text] = useState(product.category_product);

  function ChangeName(new_text) {
    setName_text(new_text);
    product.name_product = new_text;
    global.changingproduct = product;
  }

  function ChangePrice(new_text) {
    var new_value = parseInt(new_text);
    setPrice_value(new_value);
    product.price_product = new_value;
    global.changing_product = product;
  }

  function ChangeDescription(new_text) {
    setDescription_text(new_text);
    product.description_product = new_text;
    global.changingproduct = product;
  }

  function ChangeCategory(new_text) {
    setCategory_text(new_text);
    product.description_product = new_text;
    global.changingproduct = product;
  }

  const putProduct = UsePutProduct();
  const deleteProduct = UseDeleteProduct();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result.uri);
    product.imagedata = result.uri;
    global.changingproduct = product;

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
        <TouchableOpacity
          onPress={() => {
            console.log("my_old_product", old_product);
            global.changingproduct = old_product;
            console.log("my_global", global.changingproduct);
            navigation.goBack();
          }}
        >
          <Image source={lefticon} style={styles.forLeftIcon}></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.forChangingInput}
          value={product.id_product}
        ></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Name"
          placeholderTextColor={color.yellow}
          defaultValue={product.name_product}
          onChangeText={ChangeName}
        ></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Price"
          placeholderTextColor={color.yellow}
          defaultValue={product.price_product}
          onChangeText={ChangePrice}
        ></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Description Description Description Description "
          placeholderTextColor={color.yellow}
          defaultValue={product.description_product}
          onChangeText={ChangeDescription}
        ></TextInput>
        <TextInput
          style={styles.forChangingInput}
          placeholder="Category"
          placeholderTextColor={color.yellow}
          defaultValue={product.category_product}
          onChangeText={ChangeCategory}
        ></TextInput>
        <TouchableOpacity
          style={styles.forButton}
          title="Upload Photo"
          onPress={pickImage}
        >
          <Text style={styles.forTextInOpaTouch}>Upload Image</Text>
        </TouchableOpacity>
        {
          <Image
            source={{ uri: image ? image : product.imagedata }}
            style={styles.forChaningImage}
          />
        }
        {putProduct}
        {deleteProduct}
      </ScrollView>
    </ImageBackground>
  );
};

export default ChangingScreen;
