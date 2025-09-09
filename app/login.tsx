import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable>
        <Ionicons
          name="arrow-back"
          size={30}
          color={Colors.primary}
          onPress={() => router.push("/(tabs)")}
          style={{ margin: 10 }}
        />
      </Pressable>

      <View style={styles.container}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />

        <View style={{ width: "100%", marginBottom: 20 }}>
          <View>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </View>

        <View
          style={{
            width: "100%",
            marginBottom: 20,
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text>Don&apos;t have an account?</Text>

          <Pressable onPress={() => router.push("/signup")}>
            <Text style={{ color: Colors.pink }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: Colors.pink,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.pink,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonText: {
    color: Colors.background,
    fontFamily: "Cairo-Bold",
    fontSize: 16,
    lineHeight: 24,
  },
});
