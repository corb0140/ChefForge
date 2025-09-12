import "dotenv/config";

export default {
  expo: {
    name: "ChefForge",
    slug: "ChefForge",
    version: "1.0.0",
    owner: "kolizak",
    orientation: "portrait",
    icon: "./assets/images/splash.png",
    scheme: "chefforge",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      icon: {
        dark: "./assets/icons/ios-dark.png",
        light: "./assets/icons/ios-light.png",
        tinted: "./assets/icons/ios-tinted.png",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icons/adaptive-icon.png",
        monoChromeImage: "./assets/icons/adaptive-icon.png",
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
          image: "./assets/icons/splash-icon-dark.png",
          imageWidth: 200,
          resizeMode: "cover",
          backgroundColor: "#ffffff",

          dark: {
            image: "./assets/icons/splash-icon-light.png",
            backgroundColor: "#000000",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      API_URL: process.env.API_URL,
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
