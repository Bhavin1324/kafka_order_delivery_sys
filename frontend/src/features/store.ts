import { configureStore } from "@reduxjs/toolkit";
import topLoadingReducer from "./slices/loadingSlice";
import modalReducer from "./slices/modalSlice";
export const store = configureStore({
  reducer: { topLoading: topLoadingReducer, modal: modalReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

