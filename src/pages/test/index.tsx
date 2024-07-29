import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { testSelector } from './slice/selector';
import { changeMode } from './slice';

const Test: React.FC = () => {
    const { test } = useSelector(testSelector);
    const dispatch = useDispatch();
  function handleClick(){
    dispatch(changeMode());
  }
    const testValue = test ? 'true' : 'false';
  
  return (
    <div className='flex justify-center items-center  w-full h-full'>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
      
      onClick={handleClick}
      >
        change value 
      </button>
      <div className='font-bold text-red-400 w-11 h-20'>
        {testValue} 
      </div>

    </div>
  )
}

export default Test
