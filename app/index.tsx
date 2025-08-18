import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const navigateToHomeScreen = () => {
    router.push("/(tabs)");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/entry-bg.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 100,
          zIndex: 1,
          gap: 20,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            maxWidth: "80%",
            lineHeight: 62,
            fontSize: 52,
            fontFamily: "Cairo-Bold",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          Let&apos;s Get Cooking
        </Text>

        <Text
          style={{
            color: "white",
            lineHeight: 32,
            fontSize: 22,
            fontFamily: "Cairo-Regular",
          }}
        >
          Find the best recipes
        </Text>

        <Pressable
          onPress={navigateToHomeScreen}
          android_ripple={{ color: Colors.accent }}
          style={{
            width: "70%",
            height: 60,
            backgroundColor: Colors.primary,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              lineHeight: 30,
              fontSize: 16,
              fontFamily: "Cairo-Bold",
              letterSpacing: 0.5,
            }}
          >
            Start Cooking
          </Text>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={Colors.accent}
            style={{ position: "relative", top: 2 }}
          />
        </Pressable>
      </View>
    </View>
  );
}
