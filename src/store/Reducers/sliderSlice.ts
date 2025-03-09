import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // Array to hold stock data
};

// Create the slice
export const sliderSlice = createSlice({
  name: "sliderSlice",
  initialState,
  reducers: {
    setStockSlider(state, action) {
      
      state.data.unshift(action.payload);
    },
    setPreviousData(state,action){
      state.data=[...state.data,...action.payload]
    }
  },

});

// Export actions
export const { setStockSlider,setPreviousData } = sliderSlice.actions;

// Export the reducer
export default sliderSlice.reducer;
