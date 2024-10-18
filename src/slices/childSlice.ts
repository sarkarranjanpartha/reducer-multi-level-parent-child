import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChildState {
  name: string;
}

const initialState: ChildState = {
  name: "",
};

const childSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    setChildName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setChildName } = childSlice.actions;
export default childSlice.reducer;
