import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NumberScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Nút quay lại */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={24} color="black" />
          </TouchableOpacity>

          {/* Tiêu đề */}
          <Text style={styles.title}>Enter your{"\n"}mobile number</Text>

          {/* Label "Mobile Number" */}
          <Text style={styles.label}>Mobile Number</Text>

          {/* Ô nhập số điện thoại */}
          <View style={styles.inputContainer}>
            <Text style={styles.countryCode}>+880</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="Enter your number"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* View giúp đẩy nút lên trên bàn phím */}
          <View style={styles.spacer} />

          {/* Nút tiếp tục */}
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("Verification")}>
            <FontAwesome name="arrow-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
    marginTop: 80,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  countryCode: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  spacer: {
    flex: 1, 
  },
  nextButton: {
    backgroundColor: "#34A853",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 20, 
  },
});

export default NumberScreen;