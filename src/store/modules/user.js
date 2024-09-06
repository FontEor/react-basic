import { createSlice } from "@reduxjs/toolkit";
import { request, setToken, getToken, clearToken } from "@/utils";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
  },
  reducers: {
    setStoreToken(state, action) {
      state.token = action.payload;
      setToken(action.payload);
    },
  },
});
const { setStoreToken } = userStore.actions;
const userReducer = userStore.reducer;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    dispatch(setStoreToken(res.data.token));
  };
};

export { setStoreToken, fetchLogin };
export default userReducer;
