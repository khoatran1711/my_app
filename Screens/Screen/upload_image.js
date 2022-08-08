import { View, Button,Text, Image } from "react-native";

const Upload_image = () => {
  var myURL ="";
  function myFunction() {
    var str =
      "";
    var enc = window.atob(str);
  
    var image = new File([enc], {
      type: "image/jpeg"
    });
    var file = b64toBlob(str, "image/jpeg");
    var fileb = new File(["akkaka"], "ranom", {
      type: "image/jpeg"
    });
    console.log(file.size);
    console.log(fileb.size);
    var imgURL = URL.createObjectURL(file);
    console.log("myURL", imgURL);
    myURL = imgURL;
  }
  
  myFunction();
  
  function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      var byteArray = new Uint8Array(byteNumbers);
  
      byteArrays.push(byteArray);
    }
  
    return new File(byteArrays, "pot", { type: contentType });
  }
  return (
    <View>
      <Button />
      <Text>Hello </Text>
      <Image style={
        {
          width:50,
          height:50,
          resizeMode:'stretch'
        }
      } source={{uri:myURL}}></Image>
    </View>
  );
};

export default Upload_image;
