import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GrandParentState {
  message: string;
}

const initialState: GrandParentState = {
  message: "Hello from GrandParent",
};

const grandParentSlice = createSlice({
  name: "grandParent",
  initialState,
  reducers: {
    setGrandParentMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setGrandParentMessage } = grandParentSlice.actions;
export default grandParentSlice.reducer;
