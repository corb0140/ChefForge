import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PhotoPreviewState {
  photo: any;
}

const initialState: PhotoPreviewState = {
  photo: null,
};

const photoPreviewSlice = createSlice({
  name: "photoPreview",
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<any>) => {
      state.photo = action.payload;
    },
  },
});

export const { setPhoto } = photoPreviewSlice.actions;

export const selectPhoto = (state: RootState) => state.photoPreview.photo;

export default photoPreviewSlice.reducer;
