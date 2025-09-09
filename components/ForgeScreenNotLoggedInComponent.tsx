import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ForgeScreenNotLoggedInComponent() {
  const router = useRouter();

  const handleLoginPress = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please log in to view and manage your saved recipes in Your Forge.
      </Text>

      <Pressable style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
    backgroundColor: Colors.background,
  },
  text: {
    fontFamily: "Cairo-Regular",
    fontSize: 18,
    lineHeight: 30,
    color: Colors.primary,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 18,
    fontFamily: "Cairo-SemiBold",
    lineHeight: 30,
  },
});
