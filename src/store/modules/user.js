import { createSlice } from "@reduxjs/toolkit";
import { setToken, getToken, clearToken } from "@/utils";
import { loginAPI, getUserInfoAPI } from "@/apis/user";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setStoreToken(state, action) {
      state.token = action.payload;
      setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state, action) {
      state.userInfo = {};
      state.token = "";
      clearToken();
    },
  },
});
const { setStoreToken, setUserInfo, clearUserInfo } = userStore.actions;
const userReducer = userStore.reducer;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginAPI(loginForm);
    dispatch(setStoreToken(res.data.token));
  };
};
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getUserInfoAPI();
    dispatch(setUserInfo(res.data));
  };
};

export { setStoreToken, setUserInfo, clearUserInfo, fetchLogin, fetchUserInfo };
export default userReducer;
