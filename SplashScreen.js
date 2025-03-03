import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation(); // Dùng useNavigation() để điều hướng

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding"); // Chuyển sang màn hình tiếp theo
    }, 2000);
  }, [navigation]); // Thêm navigation vào dependency array

  return (
    <View style={styles.container}>
      <Image source={require("./assets/Group1.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
