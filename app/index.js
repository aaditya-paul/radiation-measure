import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import Form from "../components/form";
import Navigator from "../components/navigator";
import {styles} from "../styles/index";
export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Navigator />
        <Form />
      </View>
    </View>
  );
}
