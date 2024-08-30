import loginSelector from '@/pages/login/slice/selector';
import { user } from '@/pages/login/types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const CustomerRouter = () => {
  const user: user = useSelector(loginSelector.user);
  console.log('CustomerRouter');
  const role = user.role.name.toLowerCase()
  // if (user === null) {
  //   return <Navigate to="/login" replace />;
  // }
  // if (role !== 'renter') {
  //   return <Navigate to="/403" replace />;
  // }


  return <Outlet />;
};

export default CustomerRouter;
