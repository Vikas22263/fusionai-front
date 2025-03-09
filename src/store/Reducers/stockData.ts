import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  indexData: {} ,
  MostActive: [],
};

// Create the slice
export const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    setIndexData(
      state,
      action: PayloadAction<Record<string, { ltp: number; percentage: number }>> // Update the type to Record
    ) {
      console.log(action)
      state.indexData = action.payload; 
    },
    setMostActive(state, action) {
      state.MostActive=action.payload
    },
 
  },
});

// Export actions
export const { setIndexData, setMostActive } = stateSlice.actions;

// Export the reducer
export default stateSlice.reducer;
