import { Colors } from "@/constants/Colors";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { refreshToken } from "@/lib/axios";
import { getToken } from "@/lib/secureStore";
import { clearCredentials, setCredentials } from "@/lib/slices/userSlice";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, LogBox, View } from "react-native";

LogBox.ignoreAllLogs(true);

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    "Cairo-Bold": require("../assets/fonts/Cairo-Bold.ttf"),
    "Cairo-Regular": require("../assets/fonts/Cairo-Regular.ttf"),
    "Cairo-SemiBold": require("../assets/fonts/Cairo-SemiBold.ttf"),
    "Cairo-Light": require("../assets/fonts/Cairo-Light.ttf"),
    "Cairo-Medium": require("../assets/fonts/Cairo-Medium.ttf"),
    "Cairo-ExtraBold": require("../assets/fonts/Cairo-ExtraBold.ttf"),
  });

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = await getToken("refreshToken");

        const response = await refreshToken(token!);

        if (!token) {
          console.log("No refresh token found.");
          dispatch(clearCredentials());
          setLoading(false);
          return;
        }

        if (response.accessToken) {
          const storedUser = await getToken("user");

          dispatch(
            setCredentials({
              user: storedUser
                ? JSON.parse(storedUser)
                : { id: "", email: "", name: "" },
              accessToken: response.accessToken,
            })
          );
        } else {
          dispatch(clearCredentials());
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        dispatch(clearCredentials());
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [dispatch]);

  if (!fontsLoaded || loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hide();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="[id]/recipeDetail" options={{ headerShown: false }} />

      <Stack.Screen
        name="settings"
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
        name="[id]/userForge"
        options={{
          title: "User Forge",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="+not-found"
        options={{ title: "Not Found", headerShown: false }}
      />
    </Stack>
  );
}
