import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import control from '@/assets/images/control.png';
import logo from '@/assets/images/crop-logo.png';
import { GoSignOut } from "react-icons/go";
import { SideBarProps } from '@/constants/interface';


const SideBar: React.FC<SideBarProps> = ({
  menu
}) => {
  const title = 'Trọ tốt';
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  const [open, setOpen] = useState(true);
  const iconSize = 22;

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-white h-screen p-5  pt-8 relative duration-300 ring-1 ring-blue-200`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-[42px] w-7 border-slate-300
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 w-9 h-9 ${open && ''}`}
          />
          <h1
            className={`text-black origin-left font-semibold text-xl duration-200 font-primary  ${
              !open && 'scale-0'
            }`}
          >
            {title}
          </h1>
        </div>
        <ul className="pt-6">
          {menu.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-700 text-sm items-center gap-x-4 mt-2
               ${index === 0 && 'bg-blue-300'} 
              ${!open && 'justify-center'}  
              `}
            >
              {Menu.renderIcon}
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-700 text-sm items-center gap-x-4 mt-2
         ${!open && 'justify-center'}`}
        >
          <GoSignOut size={iconSize}/>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Đăng xuất
              </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
