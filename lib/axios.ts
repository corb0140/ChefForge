import { ApiConstants, ApiEndpoints } from "@/constants/Api";
import axios from "axios";

const api = axios.create({
  baseURL: ApiConstants.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function signUp(
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  bio: string
) {
  const response = await api.post(ApiEndpoints.SIGN_UP, {
    email,
    password,
    first_name,
    last_name,
    bio,
  });
  return response.data;
}

export async function logIn(email: string, password: string) {
  const response = await api.post(ApiEndpoints.LOG_IN, { email, password });
  return response.data;
}

export async function logOut() {
  const response = await api.post(ApiEndpoints.LOG_OUT);
  return response.data;
}

export async function user() {
  const response = await api.get(ApiEndpoints.USER);
  return response.data;
}

export async function refreshToken(refreshToken: string) {
  const response = await api.post(ApiEndpoints.REFRESH, {
    refreshToken,
  });
  return response.data;
}

export async function uploadImage(image: FormData) {
  const response = await api.post(ApiEndpoints.IMAGE, image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function getUserImage() {
  const response = await api.get(ApiEndpoints.GET_USER_IMAGE, {
    responseType: "blob",
  });
  return response.data;
}

export async function updateUserImage(image: FormData) {
  const response = await api.post(ApiEndpoints.UPDATE_USER_IMAGE, image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
