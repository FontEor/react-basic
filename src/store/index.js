import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./modules/countStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
