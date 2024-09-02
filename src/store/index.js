import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./modules/countStore";
import channelReducer from "./modules/channelStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
  },
});

export default store;
