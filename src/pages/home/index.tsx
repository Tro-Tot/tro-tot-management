import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button';
import usePrivateCall from '@/hooks/usePrivateCall';
import { profileApi } from '@/utils/api/shared/profileApi';
import React from 'react'

const Home: React.FC = () => {
  const privateCall = usePrivateCall();
  async function fetchUser(){
    try {
      const response = await privateCall(profileApi.getProfile())
      console.log(response) // this will log the user profile to the
    } catch (error) {

    }
  }
  return (
    <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
        <Button
      onClick={fetchUser}
      variant={'bluePrimary'}>Home</Button>
      </div>
  )
}

export default Home