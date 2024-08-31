import SideBar from '@/components/SideBar';
import loginSelector from '@/pages/login/slice/selector';
import { user } from '@/pages/login/types';
import React from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

const StaffLayout: React.FC = () => {

  const iconSize = 22;
  const Menus = [
    { title: 'House', renderIcon: <BiBuildingHouse size={iconSize} /> },
    { title: 'Inbox', renderIcon: <IoChatbubbleEllipses size={iconSize} /> },
    { title: 'Profile', renderIcon: <CgProfile size={iconSize} /> },
  ];
  return (
    <div className="flex ">
      {/* <Header /> */}
      <SideBar menu={Menus}/>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default StaffLayout;
