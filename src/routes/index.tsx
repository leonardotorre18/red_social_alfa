import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "../view/Home/HomeView";
import MainLayout from "../view/layout/MainLayout";
import LoginView from "../view/Login/LoginView";
import RegisterView from "../view/Register/RegisterView";
import ValidationTokenRoute from "../middleware/ValidationTokenRoute";
import LogoutView from "../view/Logout/LogoutView";
import Profile from "../view/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: 
          <ValidationTokenRoute>
            <HomeView />
          </ValidationTokenRoute>
      },
      {
        path: '/profile/:user_id',
        element: 
          <ValidationTokenRoute>
            <Profile />
          </ValidationTokenRoute>
      },
      {
        path: '/profile',
        element: 
          <ValidationTokenRoute>
            <Profile />
          </ValidationTokenRoute>
      },
      {
        path: '/login',
        element: <LoginView />
      },
      {
        path: '/register',
        element: <RegisterView />
      },
      {
        path: '/logout',
        element:
          <ValidationTokenRoute>
            <LogoutView />
          </ValidationTokenRoute>
      }
    ]
  },
]);

export const Routes = () => <RouterProvider router={router} />