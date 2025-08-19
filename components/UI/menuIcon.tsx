import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function MenuIcon({ color }: { color: string }) {
  return (
    <Pressable
      onPress={() => console.log("test")}
      style={styles.menuIconContainer}
    >
      {Array.from({ length: 4 }, (_, index) => {
        return (
          <View
            key={index}
            style={[styles.menuIcon, { backgroundColor: color }]}
          ></View>
        );
      })}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuIconContainer: {
    height: "50%",
    width: "7%",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 1.5,
    top: 5,
  },
  menuIcon: {
    width: 8,
    height: 8,
    borderRadius: 3,
  },
});
