import "dotenv/config";

export default {
  expo: {
    name: "ChefForge",
    slug: "ChefForge",
    version: "1.0.0",
    owner: "kolizak",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "chefforge",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.kolizak.chefforge",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: "02d16bba-8260-415b-8921-f14ba46df7a2",
      },
    },
    updates: {
      url: "https://u.expo.dev/02d16bba-8260-415b-8921-f14ba46df7a2",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
