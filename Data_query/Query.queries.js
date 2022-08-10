import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useEffect } from "react";
import axios from "axios";
import styles from "../Screens/Screen/LoginSreen/style";

const my_API = "https://localhost:7116/";

export const UseGetUser = () => {
  const [data, setData] = useState([]);

  async function Login(account) {
    if (account) {
      return await axios
        .get(my_API + "useraccount/" + account, {})
        .then((response) => {
          setData(response.data);
          var password = response.data.user_password;
          console.log(
            global.password == password
              ? global.navigationScreen.navigate("Home")
              : "Fail"
          );
        });
    }
  }

  return (
    <TouchableOpacity
      style={styles.forButton}
      onPress={() => Login(global.account)}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Login
      </Text>
    </TouchableOpacity>
  );
};

export const UseGetUserInfo = () => {
  const [data, setData] = useState([]);
  var url_key = my_API + "user/" + global.account;
  console.log(url_key);
  useEffect(() => {
    axios.get(url_key).then((response) => setData(response.data));
  }, []);
  var return_data = [];
  if (data.length > 0) {
    console.log("len>0", data);
  }
  return data;
};
