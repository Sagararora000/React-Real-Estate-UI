import NavBar from "./components/navbar/NavBar";
import "./layout.scss";
import HomePage from "./Routes/homepage/HomePage";
import Layout from "./Routes/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./Routes/listPage/listPage";
import SinglePage from "./Routes/singlepage/SinglePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/homepage",
          element: <HomePage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/listpage",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
