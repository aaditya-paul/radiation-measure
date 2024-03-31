import React from "react";
import {Text, TouchableOpacity, View, Image} from "react-native";
import ToggleDrawer from "../utils/toggleDrawer";
import {router, useNavigation} from "expo-router";
import {Feather} from "@expo/vector-icons";
import {styles} from "../styles/navigator";
import DefaultProfile from "../assets/def.png";
const Navigator = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => ToggleDrawer(navigation)}>
        <Feather name="menu" size={30} color="black" />
      </TouchableOpacity>
      <Image source={DefaultProfile} style={styles.def} />
    </View>
  );
};

export default Navigator;
