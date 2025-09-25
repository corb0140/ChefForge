import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./slices/photoPreviewSlice";
import searchTextReducer from "./slices/searchTextSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
    user: userReducer,
    photoPreview: photoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
