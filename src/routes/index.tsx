import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "../view/Home/HomeView";
import MainLayout from "../view/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeView />
      }
    ]
  },
]);

export const Routes = () => <RouterProvider router={router} />