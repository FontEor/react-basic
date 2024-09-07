import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
import "./index.css";
const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
