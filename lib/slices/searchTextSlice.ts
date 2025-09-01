import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: "",
};

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },

    clearSearchText: (state) => {
      state.searchText = "";
    },
  },
});

export const { setSearchText, clearSearchText } = searchTextSlice.actions;

export const selectSearchText = (state: RootState) =>
  state.searchText.searchText;

export default searchTextSlice.reducer;
