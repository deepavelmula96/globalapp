import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Redux/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  }
})