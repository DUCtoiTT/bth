import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ảnh background */}
      <Image
        source={require("./assets/onboarding.png")}
        style={styles.imageBackground}
      />
      <View style={styles.overlay}>
        <Image
          source={require("./assets/Group.png")}
          style={styles.imageGroup}
        />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}

        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 70,
    //backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  imageGroup: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;

