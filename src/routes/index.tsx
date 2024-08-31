import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import CustomerRouter from './CustomerRoute';
import ManagerRoute from './ManagerRoute';

import CustomerLayout from '@/layouts/CustomerLayout';
import Loading from '@/components/Loading';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Test from '@/pages/test';
import ManagerLayout from '@/layouts/ManagerLayout';
import StaffRouter from './StaffRouter';
import StaffLayout from '@/layouts/StaffLayout';
import House from '@/pages/house';

const RouterComponent: React.FC = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Navigate to="login" /> },

    {
      element: <ManagerRoute />,
      children: [
        {
          element: <ManagerLayout />,
          children: [
            {
              path: '/admin/home',
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/test',
      element: <Test />,
    },

    {
      path: '/',
      element: <CustomerRouter />,
      children: [
        {
          element: <CustomerLayout />,
          children: [
            {
              path: '/renter/home',
              element: <Home />,
            },
          ],
        },
      ],
    },

    {
      path: '/',
      element: <StaffRouter />,
      children: [
        {
          element: <StaffLayout />,
          children: [
            {
              path: '/staff/home',
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      path: '/house',
      element: <House />,
    },

    // { path: '*', element: <ErrorPage /> },
  ]);
  return <RouterProvider fallbackElement={<Loading />} router={router} />;
};
export default RouterComponent;
