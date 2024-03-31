import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {Component} from "react";
import {styles} from "../styles/form";
import {TextInput} from "react-native-gesture-handler";

const Form = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.infoTxt}>
            Please fill the form to schedule a pick-up.
          </Text>
        </View>
        <View>
          <View>
            <Text style={styles.titleTxt}> Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={[styles.titleTxt, {width: "25%"}]}> Device Type</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.titleTxt}> Model</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={[styles.titleTxt, {width: "20%"}]}> Location</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={[styles.titleTxt, {width: "30%"}]}>
              Additional Info
            </Text>

            <TextInput
              style={[styles.input, {height: 200, textAlignVertical: "top"}]}
            />
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.txt}>Submit and Schedule</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Form;
