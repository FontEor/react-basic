import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "@/pages/App";
import Channel from "@/pages/App/Channel";
import Params from "@/pages/App/Params";
import Layout from "@/pages/Layout";
import Notfound from "@/pages/404";
import Login from "@/pages/Login";
import AuthRoute from "@/components/AuthRoute";

import { lazy, Suspense } from "react";
const Publish = lazy(() => import("@/pages/Publish"));
const Article = lazy(() => import("@/pages/Article"));
const Home = lazy(() => import("@/pages/Home"));
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true, //设置默认二级路由
        element: (
          <Suspense fallback={"加载中"}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/publish",
        element: (
          <Suspense fallback={"加载中"}>
            <Publish />
          </Suspense>
        ),
      },
      {
        path: "/article",
        element: (
          <Suspense fallback={"加载中"}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "/app",
        element: <App></App>,
        children: [
          {
            path: "/app/Channel",
            element: <Channel></Channel>,
          },
          {
            path: "/app/Params",
            element: <Params></Params>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Notfound></Notfound>,
  },
]);

export default router;
