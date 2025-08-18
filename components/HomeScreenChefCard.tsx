import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreenChefCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.text}>HomeScreenChefCard</Text>
      </View>

      <View style={styles.shadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    width: 150,
    height: 150,
    borderRadius: 20,
    marginRight: 15,
  },
  card: {
    position: "absolute",
    width: 140,
    height: 140,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
  },
  text: {
    fontFamily: "Cairo-Regular",
    fontSize: 14,
  },
  shadow: {
    backgroundColor: Colors.primary,
    position: "absolute",
    right: 6,
    bottom: 6,
    height: 140,
    width: 140,
    borderRadius: 20,
    opacity: 0.785,
    zIndex: -1,
  },
});
