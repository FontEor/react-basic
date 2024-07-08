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
  },
});

const { increament, decrement } = counterStore.actions;
const counterReducer = counterStore.reducer;

export { increament, decrement };

export default counterReducer;
