import { Colors } from "@/constants/Colors";
import { store } from "@/lib/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <Stack>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="[id]/recipeDetail"
          options={{ headerShown: false }}
        />
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
          name="[groupID]/chatRoom"
          options={{
            title: "Chat Room",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "Log In",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            title: "Sign Up",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{ title: "Not Found", headerShown: false }}
        />
      </Stack>
    </Provider>
  );
}
