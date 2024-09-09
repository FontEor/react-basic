import { request } from "../utils";

//获取频道列表
export function getChannelAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}

//获取频道列表
export function createArticleAPI(data) {
  return request({
    url: "/mp/articles?draft=false",
    method: "POST",
    data: data,
  });
}

// 获取文章列表

export function getArticleAPI(params) {
  return request({
    url: "/mp/articles",
    method: "GET",
    params: params,
  });
}

// 刪除文章
export const delArticle = async (data) => {
  return request({
    url: `/mp/articles/${data.id}`,
    method: "DELETE",
  });
};

// 根据id获取文章详情
export const getArticleByIdAPI = async (id) => {
  return request({
    url: `/mp/articles/${id}`,
    method: "GET",
  });
};

// 根据id编辑文章详情
export const EditArticleByIdAPI = async (id, data) => {
  return request({
    url: `/mp/articles/${id}?draft=false`,
    method: "PUT",
    data: data, //body参数
  });
};
