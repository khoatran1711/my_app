import react from "react";
import React from 'react';
import { StatusBar } from "react-native";
import { Button, StyleSheet, TextInput, Platform } from "react-native";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchImageLibrary } from 'react-native-image-picker';
import styles from "./style";
import color from '../colors'
import ImagePicker from 'react-native-image-picker';


import imagebackground from './../../Pictures/background_manage.png'
import lefticon from "./../../Pictures/left_icon.png";
import test_product from "./../../Pictures/test_product.png"
import { ScrollView } from "react-native";



var options ={
    title:'Select Avatar',
    customButtons:[
        {name:'fb',title:'Choose Photo from Facebook'},
    ],
    storageOptions:{
        skipBackup:true,
        path:'images'
    }
    
};
const ChangingScreen=({navigation})=>{
    
    function show (){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
               filePath: response,
               fileData: response.data,
               fileUri: response.uri
              });
            }
          });
    }
    

   
    return(
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
    <TextInput style={styles.forChangingInput} value="ID"></TextInput>
    <TextInput style={styles.forChangingInput} placeholder="Name" placeholderTextColor={color.yellow}></TextInput>
    <TextInput style={styles.forChangingInput} placeholder="Price" placeholderTextColor={color.yellow}></TextInput>
    <TextInput style={styles.forChangingInput} placeholder="Description Description Description Description " placeholderTextColor={color.yellow}></TextInput>
    <TextInput style={styles.forChangingInput} placeholder="Category" placeholderTextColor={color.yellow}></TextInput>
    <Image style={styles.forChaningImage} source={test_product}></Image>
    <TouchableOpacity>
        <Text>Change</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text>Delete</Text>
    </TouchableOpacity>
    <Button title="Upload Photo" onPress={show} />

    </ScrollView>
  </ImageBackground>
   )
}

export default ChangingScreen;