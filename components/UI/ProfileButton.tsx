import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export type ProfileButtonProps = {
  text: string;
  onClick: () => void;
};

export default function ProfileButton({ text, onClick }: ProfileButtonProps) {
  return (
    <Pressable
      onPress={() => onClick()}
      style={[
        styles.button,
        {
          backgroundColor: text === "Follow" ? Colors.primary : "",
          borderWidth: text === "Follow" ? 0 : 1,
          borderColor: Colors.primary,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: text === "Follow" ? "white" : Colors.primary },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontFamily: "Cairo-SemiBold",
    fontSize: 14,
    lineHeight: 20,
  },
});
