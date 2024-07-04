import React from 'react';

import { Outlet } from 'react-router-dom';
const ManagerLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default ManagerLayout;
