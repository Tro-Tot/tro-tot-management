import { Button } from '@/components/ui/button';
import usePrivateCall from '@/hooks/usePrivateCall';
import { profileApi } from '@/utils/api/shared/profileApi';

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
    <>
      <Button
      onClick={fetchUser}
      variant={'bluePrimary'}>Home</Button>
    </>
  );
};
export default Home;
