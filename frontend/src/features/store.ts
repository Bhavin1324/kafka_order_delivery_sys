import { configureStore } from "@reduxjs/toolkit";
import topLoadingReducer from "./slices/loadingSlice";
import modalReducer from "./slices/modalSlice";
import ordersReducer from "./slices/orderSlice"
export const store = configureStore({
  reducer: { topLoading: topLoadingReducer, modal: modalReducer , orders:ordersReducer},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

