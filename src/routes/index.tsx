import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "../view/Home/HomeView";
import MainLayout from "../view/layout/MainLayout";
import LoginView from "../view/Login/LoginView";
import RegisterView from "../view/Register/RegisterView";
import ValidationToken from "../middleware/ValidationToken";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ValidationToken><HomeView /></ValidationToken>
      },
      {
        path: '/login',
        element: <LoginView />
      },
      {
        path: '/register',
        element: <RegisterView />
      }
    ]
  },
]);

export const Routes = () => <RouterProvider router={router} />