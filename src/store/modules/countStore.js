//
import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 20,
  },
  reducers: {
    increament(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = state.count + action.payload;
    },
  },
});

const { increament, decrement, addToNum } = counterStore.actions;
const counterReducer = counterStore.reducer;

export { increament, decrement, addToNum };

export default counterReducer;
