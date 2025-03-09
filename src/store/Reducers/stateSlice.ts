import { createSlice } from "@reduxjs/toolkit";

interface AllState {
  GooglepopupState: boolean;
  UserDetails: null;
  currentStock:string
}
const initialState: AllState = {
  GooglepopupState: false,
  UserDetails: null,
  currentStock:localStorage.getItem('currentStock')||'DJI'
};

export const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    Googlepopup: (state) => {
      state.GooglepopupState = !state.GooglepopupState;
    },
    userDetails: (state, data) => {
      state.UserDetails = data.payload;
    },
    tradingViewStock:(state,payload)=>{
       state.currentStock=payload.payload
    }
  },
});

export const { Googlepopup, userDetails,tradingViewStock } = stateSlice.actions;
export default stateSlice.reducer;
