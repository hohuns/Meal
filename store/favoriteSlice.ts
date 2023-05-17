import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  ids: string[];
};

const initialState: initialState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.ids.push(action?.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.ids.splice(state?.ids.indexOf(action?.payload), 1);
    },
    reset: () => initialState,
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
