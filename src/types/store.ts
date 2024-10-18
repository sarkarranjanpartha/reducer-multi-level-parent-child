import { configureStore } from "@reduxjs/toolkit";
import grandParentReducer from "../slices/grandParentSlice";
import parentReducer from "../slices/parentSlice";
import childReducer from "../slices/childSlice";

export const store = configureStore({
  reducer: {
    grandParent: grandParentReducer,
    parent: parentReducer,
    child: childReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
