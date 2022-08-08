import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import color from "../colors";
const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  forLeftIcon: {
    marginLeft: (width * 3) / 100,
    marginTop: (width * 3) / 100,
    width: (width * 7) / 100,
    height: (width * 7) / 100,
    resizeMode: "stretch",
  },
  forChaningImage:{
    width:width*80/100,
    height:width*80/100,
    resizeMode:'stretch'
  },
  forChangingInput:{
    fontSize:width*6/100,
    color:color.yellow,
  }
})

  export default styles