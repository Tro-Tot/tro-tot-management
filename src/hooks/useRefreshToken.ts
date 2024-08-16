import { useEffect } from 'react';
import { useNavigate } from 'react-router';


import axios  from 'axios';
import useLogout from './useLogout';
import { useToast } from './use-toast';
import { useDispatch, useSelector } from 'react-redux';
import loginSelector from '@/pages/login/slice/selector';
import Cookies from 'js-cookie';
import { actions } from '@/pages/login/slice';
import { user } from '@/pages/login/types';
import { refreshApi } from '@/utils/api/shared/refreshApi';

const useRefreshToken = () => {
  const user: user = useSelector(loginSelector.user);
  // const logout = useLogout();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refreshToken = Cookies.get('refreshToken');
  // const { toast } = useToast();
  // const signOut = async () => {
  //   await logout();
  //   toast({
  //       title: "You have been logged out",
  //     })
  //   navigate('/');
  // };

  // if (user == null) {
  //   navigate('/');
  //   console.log('login failed');
  // }
  // let accessToken = null;
  // const auth = Cookies.get('accessToken');
  // if (auth) {
  //   accessToken = auth;
  // } else {
  //   navigate('/');
  // }


  const refresh = async () => {
    let header = {
        "Refresh-Token": refreshToken,
    }
      const response = await axios(refreshApi.refreshToken(header));
      dispatch(actions.setUser((prev: user) => {
        return {
          ...prev,
          accessToken: response?.data?.data.accessToken,
          refreshToken: response?.data?.data.refreshToken,
        };
      }));
      Cookies.set('accessToken', response?.data?.data.accessToken);
      Cookies.set('refreshToken', response?.data?.data.refreshToken);
      return response.data.data;
  };
  return refresh;
}


export default useRefreshToken;
