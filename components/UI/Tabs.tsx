import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type TabsProps = {
  isActive: string;
  setIsActive: () => string | void;
};

export default function Tabs({ isActive, setIsActive }: TabsProps) {
  return (
    <View style={styles.TabView}>
      <Pressable
        style={[
          styles.TabButton,
          {
            borderBottomWidth:
              isActive === "posts" || isActive === "ingredients" ? 2 : 0,
            borderColor:
              isActive === "ingredients" || isActive === "instructions"
                ? "white"
                : "",
          },
        ]}
        onPress={() => setIsActive()}
      >
        {isActive === "ingredients" || isActive === "instructions" ? (
          <Text style={styles.TabText}>Ingredients</Text>
        ) : (
          <Ionicons name="grid-outline" size={20} color="black" />
        )}
      </Pressable>

      <Pressable
        style={[
          styles.TabButton,
          {
            borderBottomWidth:
              isActive === "likes" || isActive === "instructions" ? 2 : 0,
            borderColor:
              isActive === "ingredients" || isActive === "instructions"
                ? "white"
                : "",
          },
        ]}
        onPress={() => setIsActive()}
      >
        {isActive === "ingredients" || isActive === "instructions" ? (
          <Text style={styles.TabText}>Instructions</Text>
        ) : (
          <Ionicons name="heart-outline" size={20} color="black" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  TabView: {
    flexDirection: "row",
    marginTop: 20,
    height: 35,
    width: "100%",
    justifyContent: "center",
  },
  TabButton: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
  },
  TabText: {
    fontFamily: "Cairo-Regular",
    color: "white",
    fontSize: 15,
    lineHeight: 20,
  },
});
