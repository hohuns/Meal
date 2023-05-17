import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

//Create the store
const store = configureStore({
  reducer: { favorite: favoriteSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
