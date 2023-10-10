import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "../view/Home/HomeView";
import MainLayout from "../view/layout/MainLayout";
import LoginView from "../view/Login/LoginView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeView />
      },
      {
        path: '/login',
        element: <LoginView />
      }
    ]
  },
]);

export const Routes = () => <RouterProvider router={router} />