import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  infoTxt: {
    color: "#5F5A12",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#5F5A12",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 15,
    zIndex: 1,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F5A12",
    width: "60%",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 50,
  },
  txt: {
    color: "white",
    fontSize: 16,
  },
  titleTxt: {
    marginVertical: 3,
    position: "relative",
    top: 10,
    backgroundColor: "#F5F5DC",
    zIndex: 99,
    width: "15%",
    textAlign: "center",
    left: 15,
  },
});
