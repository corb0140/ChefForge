import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddRecipe() {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
