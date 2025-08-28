import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const navigateToHomeScreen = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/entry-bg.jpg")}
        style={styles.backgroundImage}
      />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Let&apos;s Get Cooking</Text>

        <Text style={styles.subtitle}>Find the best recipes</Text>

        <Pressable
          onPress={navigateToHomeScreen}
          android_ripple={{ color: Colors.pink }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Cooking</Text>

          <Ionicons
            name="arrow-forward"
            size={24}
            color={Colors.pink}
            style={{ position: "relative", top: 2 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    bottom: 100,
    zIndex: 1,
    gap: 20,
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    maxWidth: "80%",
    lineHeight: 62,
    fontSize: 52,
    fontFamily: "Cairo-Bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    color: "white",
    lineHeight: 32,
    fontSize: 22,
    fontFamily: "Cairo-Regular",
  },
  button: {
    width: "70%",
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "white",
    lineHeight: 30,
    fontSize: 16,
    fontFamily: "Cairo-Bold",
    letterSpacing: 0.5,
  },
});
