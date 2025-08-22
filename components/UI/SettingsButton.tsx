import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface SettingsButtonProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title?: string;
  onPress?: () => void;
}

export default function SettingsButton({
  icon,
  title,
  onPress,
}: SettingsButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        {icon && <Ionicons name={icon} size={24} color="black" />}
        {title && <Text style={styles.text}>{title}</Text>}
      </View>

      <Ionicons name="chevron-forward" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Cairo-Regular",
    opacity: 0.6,
  },
});
