// SplashScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Text style={styles.splashText}>Welcome to Money Expenses</Text>
    {/* Bạn có thể thêm hình ảnh, logo, hoặc các thành phần khác của splash screen ở đây */}
  </View>
);

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Màu nền của splash screen
  },
  splashText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Màu chữ của splash screen
  },
});

export default SplashScreen;
