import { request } from "../utils";

//登录请求
export function loginAPI(data) {
  return request({
    url: "/authorizations",
    method: "POST",
    data: data,
  });
}

// 获取用户信息
export function getUserInfoAPI() {
  return request({
    url: "/user/profile",
    method: "GET",
  });
}
