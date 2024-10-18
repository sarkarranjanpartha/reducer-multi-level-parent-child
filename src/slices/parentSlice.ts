import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ParentState {
  count: number;
}

const initialState: ParentState = {
  count: 0,
};

const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { incrementCount, decrementCount } = parentSlice.actions;
export default parentSlice.reducer;
