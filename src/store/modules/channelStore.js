import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannelList } = channelStore.actions;
const reducer = channelStore.reducer;

const fetchChannelLsit = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannelList(res.data.data.channels));
  };
};

export { fetchChannelLsit };
export default reducer;
