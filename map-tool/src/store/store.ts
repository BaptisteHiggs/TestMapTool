import { configureStore } from "@reduxjs/toolkit";
import mapboxTokenReducer from "./slice";

export default configureStore({
  reducer: {
    mapboxTokenReducer,
  },
});
