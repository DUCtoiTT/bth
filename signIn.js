import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh banner */}
      <Image source={require("./assets/sign.png")} style={styles.image} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Get your groceries with Nectar</Text>

      {/* Số điện thoại */}
      <Text style={styles.phoneNumber}>+880</Text>

      {/* Đường kẻ ngang */}
      <View style={styles.separator} />

      {/* Tiêu đề nhỏ */}
      <Text style={styles.smallText}>Or connect with social media</Text>

      {/* Nút Google */}
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút Phone (Thay thế Facebook) */}
      <TouchableOpacity style={styles.phoneButton} onPress={() => navigation.navigate("Number")}>
        <FontAwesome name="phone" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Phone</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  smallText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F4",
    paddingVertical: 14,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 10,
  },
  phoneButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#34A853",
    paddingVertical: 14,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SignInScreen;