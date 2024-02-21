import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MapboxTokenState {
  value: string;
}

const initialState: MapboxTokenState = {
  value: "",
};

export const mapboxTokenSlice = createSlice({
  name: "mapboxToken",
  initialState,
  reducers: {
    setKey: (state, action: PayloadAction<string>) => ({
      ...state,
      value: action.payload,
    }),
  },
});

export const { setKey } = mapboxTokenSlice.actions;

export default mapboxTokenSlice.reducer;
