import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

import counterReducer from "./modules/countStore";
import channelReducer from "./modules/channelStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    user: userReducer,
  },
});

export default store;
