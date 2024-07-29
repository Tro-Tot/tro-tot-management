import { HiAdjustments } from 'react-icons/hi';
import { Button } from './components/ui/button';
import Colors from './constants/color';
import RouterComponent from '@';

function App() {
  return (
    <>
      <div className="font-bold text-3xl text-primaryDark">
        This is the management page
      </div>
      <RouterComponent />
    </>
  );
}

export default App;
