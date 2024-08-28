import ManagementNavBar from '@/components/management/Navbar';
import ManagementSideBar from '@/components/management/SideBar';
import React from 'react';

import { Outlet } from 'react-router-dom';
const ManagerLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      {/* <Header /> */}
      <ManagementNavBar />
      <ManagementSideBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default ManagerLayout;
