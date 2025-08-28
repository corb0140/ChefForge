import { Colors } from "@/constants/Colors";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Cairo-Bold": require("../assets/fonts/Cairo-Bold.ttf"),
    "Cairo-Regular": require("../assets/fonts/Cairo-Regular.ttf"),
    "Cairo-SemiBold": require("../assets/fonts/Cairo-SemiBold.ttf"),
    "Cairo-Light": require("../assets/fonts/Cairo-Light.ttf"),
    "Cairo-Medium": require("../assets/fonts/Cairo-Medium.ttf"),
    "Cairo-ExtraBold": require("../assets/fonts/Cairo-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[id]/recipeDetail" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]/settings"
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: Colors.background },
          headerTitleStyle: { fontFamily: "Cairo-Bold", fontSize: 24 },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{ title: "Not Found", headerShown: false }}
      />
    </Stack>
  );
}
