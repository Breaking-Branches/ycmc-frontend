import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function NavBar(props) {
  const filesInfo = useSelector((state) => state.filesInfoReducer);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const arr1 = Object.values(filesInfo[Object.keys(filesInfo)[0]]);
    const arr2 = Object.values(filesInfo[Object.keys(filesInfo)[1]]);
    const combinedArr = arr1.concat(arr2); // concatenate the two arrays
    const sum = combinedArr.reduce((acc, arr) => acc + arr.length, 0);
    setTotal(sum);
  }, []);

  return (
    <div className='p-5 flex justify-between items-center bg-[#f9f9f9]'>
      <h1 className='text-2xl font-bold text-[#6D4AFF]'>YCMC-You Copied My Code</h1>

      <div className='flex items-center'>
        <span className='flex mr-4 bg-[#fff] rounded shadow p-2 font-bold'>File Limit: 20</span>
        <span className='flex mr-4 bg-[#fff] rounded shadow p-2 font-bold'>File Selected: {total}</span>
      </div>
    </div>
  );
}