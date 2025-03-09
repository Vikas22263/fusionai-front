import { configureStore } from "@reduxjs/toolkit";
import  stateSlice  from "./Reducers/stateSlice";
import indexdata from "./Reducers/stockData"
import sliderSlice from "./Reducers/sliderSlice";

const store = configureStore({
  reducer: {
    stateSlice:stateSlice,
    setIndexData:indexdata,
    sliderData:sliderSlice
  },
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
