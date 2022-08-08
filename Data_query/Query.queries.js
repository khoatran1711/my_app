import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const UseGetUser = () => {
  const [data, setData] = useState([]);
  var url_key = "https://finalspaceapi.com/api/v0/character/?limit=2";
  useEffect(() => {
    axios
      .get(url_key)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  var return_data = [];
  if (data.length > 0) {
    return data;
  }
  return return_data;
};
