import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
  },
  reducers: {
    addName(state, action) {
      state.username = action.payload;
    },
    removeName(state) {
      state.username = "";
    },
  },
});

const persistCongig = {
  key: "user",
  storage,
  whitelist: ["username"],
};

export const persistedUserReducer = persistReducer(
  persistCongig,
  userSlice.reducer
);

export const { addName, removeName } = userSlice.actions;
