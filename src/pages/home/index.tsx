import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button';
import usePrivateCall from '@/hooks/usePrivateCall';
import { profileApi } from '@/utils/api/shared/profileApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import { title } from 'process';
import { cn } from '@/lib/utils';

const TabTitle = [
  {
    title: 'House details',
    value: 'house',
     components: <div>Account</div>
  },
  {
    title: 'Room',
    value: 'room',
    components: <div>Account</div>
  },
  {
    title: 'Services',
    value: 'services',
    components: <div>Account</div>
  },
  {
    title: 'Renters',
    value: 'renters',
    components: <div>Account</div>
  },
  {
    title: 'Bills',
    value: 'bills',
    components: <div>Account</div>
  },
]
const Home: React.FC = () => {
  const privateCall = usePrivateCall();

  async function fetchUser(){
    try {
      const response = await privateCall(profileApi.getProfile())
      console.log(response) // this will log the user profile to the
    } catch (error) {

    }
  }
  const gridColsClass = `grid-cols-${TabTitle.length}`;
  const defaultValue = TabTitle[0].value;
  console.log(gridColsClass)
  return (
    <div className='flex justify-center w-full p-6'>
      
      <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className={cn("w-full grid grid-cols-5", gridColsClass)} >
        {TabTitle.map((tab) => (
          <TabsTrigger value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {TabTitle.map((tab) => (
          <TabsContent value={tab.value}>
            {tab.components}
          </TabsContent>
        ))}
    </Tabs>
    </div>
    
  )
}

export default Home;
