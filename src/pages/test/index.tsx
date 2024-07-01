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
    
  
  return (
    <div className='flex justify-center items-center  w-full h-full'>
      <button
      onClick={handleClick}
      >
        test 
      </button>
      <div className='font-bold text-red-400 w-11 h-20'>
        {test}
      </div>
      <div>
        dsakl;djaskldjaslkj
      </div>
    </div>
  )
}

export default Test
