import { configureStore } from "@reduxjs/toolkit";
import searchTextReducer from "./slices/searchTextSlice";

export const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
