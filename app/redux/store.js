import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import feedbackReducer from "./feedbackSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    feedback: feedbackReducer,
  },
});
