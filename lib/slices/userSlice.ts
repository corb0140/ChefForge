import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    bio: string;
  };
  accessToken: string | null;
  imageUri?: any;
}

const initialState: UserState = {
  user: {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    bio: "",
  },
  accessToken: null,
  imageUri: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: UserState["user"];
        accessToken: string;
        imageUri?: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    setUserImage: (state, action: PayloadAction<any>) => {
      state.imageUri = action.payload;
    },

    clearCredentials: (state) => {
      state.user = {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        bio: "",
      };
      state.accessToken = null;
      state.imageUri = undefined;
    },
  },
});

export const { setCredentials, setUserImage, clearCredentials } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
