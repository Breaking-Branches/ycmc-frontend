import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const test = useSelector((state)=>state.selectedFileInfoReducer);
  const repo1 = Object.values(Object.values(test)[0]).map((file)=>file.length).reduce((acc, val) => acc + val, 0);
  const repo2 = Object.values(Object.values(test)[1]).map((file)=>file.length).reduce((acc, val) => acc + val, 0);
  
  return (
    <div className='p-5 flex justify-between items-center bg-[#f9f9f9]'>
      <h1 className='md:text-2xl text:sm font-bold text-[#6D4AFF]'>YCMC-You Copied My Code</h1>
      <ToastContainer  className='mt-14'/>
      <div className='flex items-center'>
        <span className='flex md:mr-4 bg-[#fff] md:text-lg rounded shadow text-sm p-2 font-bold'>File Limit: 20</span>
        <span className={`flex mr-4 bg-[#fff]  text:sm text-${repo1+repo2>20 ? '[#c02121]' : 'black'} rounded shadow p-2 font-bold`}>File Selected: {repo1+repo2}</span>
      </div>
    </div>
  );
}