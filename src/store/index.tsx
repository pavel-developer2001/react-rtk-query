import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemApi } from "./apis/itemApi";
import { postApi } from "./apis/postApi";

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  [itemApi.reducerPath]: itemApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postApi.middleware, itemApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
