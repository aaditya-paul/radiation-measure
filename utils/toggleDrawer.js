import React from "react";
import {router, useNavigation} from "expo-router";
import {DrawerActions} from "@react-navigation/native";

const ToggleDrawer = (navigation) => {
  navigation.dispatch(DrawerActions.openDrawer());
  return null;
};

export default ToggleDrawer;
