import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "@/pages/App";
import Channel from "@/pages/App/Channel";
import Params from "@/pages/App/Params";
import Article from "@/pages/App/Article";
import Layout from "@/pages/Layout";
import Notfound from "@/pages/404";
import Login from "@/pages/Login";
import AuthRoute from "@/components/AuthRoute";
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
        // path: "/app",
        index: true, //设置默认二级路由
        element: <App></App>,
      },
      {
        path: "/channle",
        element: <Channel></Channel>,
      },
      {
        path: "/Params",
        element: <Params></Params>,
      },
      {
        path: "/Article/:id",
        element: <Article></Article>,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound></Notfound>,
  },
]);

export default router;
