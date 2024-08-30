import loginSelector from '@/pages/login/slice/selector';
import { user } from '@/pages/login/types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const CustomerRouter = () => {
  return <Outlet />;
};

export default CustomerRouter;
