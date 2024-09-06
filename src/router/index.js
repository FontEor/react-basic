import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "../App";
import Channel from "../vie/Channel";
import Params from "../vie/Params";
import Article from "../vie/Article";
import Layout from "../pages/Layout";
import Notfound from "../pages/404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
