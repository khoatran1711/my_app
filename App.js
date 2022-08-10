import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import LoginScreen from "./Screens/Screen/LoginScreen/LoginScreen";
import SignupScreen from "./Screens/Screen/SignupScreen/SignupScreen";
import HomeScreen from "./Screens/Screen/HomeScreen/HomeScreen";
import FindingScreen from "./Screens/Screen/FindingScreen/FindingScreen";
import ProductScreen from "./Screens/Screen/ProductScreen/ProductScreen";
import UserInfo from "./Screens/Screen/UserInfoScreen/UserInfo";
import ChangingScreen from "./Screens/Screen/ChangingScreen/ChangingScreen";
import HomeMangeScreen from "./Screens/Screen/HomeManageScreen/HomeMangeScreen";
import AddingScreen from "./Screens/Screen/AddingScreen/AddingScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  console.log("app created");

  function hello() {
    console.log("hello world");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="HomeManage" component={HomeMangeScreen} />
        <Stack.Screen name="Changing" component={ChangingScreen} />
        <Stack.Screen name="Adding" component={AddingScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Finding" component={FindingScreen} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
  },
  forImage: {
    height: 50,
    resizeMode: "stretch",
  },
});
