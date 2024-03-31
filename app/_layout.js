import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer screenOptions={{headerTitleAlign: "center", headerShown: false}}>
        <Drawer.Screen name="index" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
