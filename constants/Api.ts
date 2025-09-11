import Constants from "expo-constants";

export const ApiConstants = {
  BASE_URL: Constants.expoConfig?.extra?.API_URL || "http://10.0.0.94:8000",
};

export const ApiEndpoints = {
  SIGN_UP: "/auth/signup",
  LOG_IN: "/auth/login",
  LOG_OUT: "/auth/logout",
  USER: "/user",
};
