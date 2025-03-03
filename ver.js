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

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

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
          <Text style={styles.title}>Enter your{"\n"}4-digit code</Text>

          {/* Label "Code" */}
          <Text style={styles.label}>Code</Text>

          {/* Ô nhập mã */}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            placeholder="- - - -"
            placeholderTextColor="gray"
            value={code}
            onChangeText={setCode}
            textAlign="center"
          />

          {/* Gửi lại mã */}
          <TouchableOpacity onPress={() => alert("Resend Code")} style={styles.resendButton}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>

          {/* Nút tiếp tục */}
          <TouchableOpacity style={styles.nextButton} onPress={() => alert("Code Verified!")}>
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
    fontSize: 15,
    color: "gray",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    fontSize: 24,
    paddingVertical: 10,
    textAlign: "center",
    letterSpacing: 10, // Tạo khoảng cách giữa các số
  },
  resendButton: {
    marginTop: 15,
  },
  resendText: {
    color: "#34A853",
    fontSize: 16,
  },
  nextButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#34A853",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VerificationScreen;