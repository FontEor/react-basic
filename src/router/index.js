import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "@/pages/App";
import Channel from "@/pages/App/Channel";
import Params from "@/pages/App/Params";
// import Article from "@/pages/App/Article";
import Layout from "@/pages/Layout";
import Notfound from "@/pages/404";
import Login from "@/pages/Login";
import AuthRoute from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
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
        element: <Home></Home>,
      },
      {
        path: "/publish",
        element: <Publish></Publish>,
      },
      {
        path: "/article",
        element: <Article></Article>,
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
