import { configureStore } from "@reduxjs/toolkit";
import { mainInfoReducer } from "./commonData";

export const store = configureStore({
  reducer: {
    commonInfo: mainInfoReducer,
  },
});
