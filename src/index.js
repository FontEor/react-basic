import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import router from "./route";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
