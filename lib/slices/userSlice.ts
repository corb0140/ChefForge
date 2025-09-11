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
  accessToken: null;
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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: UserState["user"]; accessToken: any }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
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
    },
  },
});

export const { setCredentials, clearCredentials } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
