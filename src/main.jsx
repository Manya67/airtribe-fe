import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewCard from "./components/NewCard.jsx";
import Container from "./components/Container";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Container />,
      },
      // {
      //   path: ":heading/:id",
      //   element: <NewCard />,
      // },
      {
        path: ":heading/new",
        element: <NewCard />,
      },
      // {
      //   path:":id",
      //   element:
      // }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
