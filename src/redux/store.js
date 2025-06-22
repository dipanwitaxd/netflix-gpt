import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
  });
};
