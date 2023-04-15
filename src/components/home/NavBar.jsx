import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
export default function NavBar(props) {
  const filesInfo = useSelector((state) => state.filesInfoReducer)
  const handle = ()=>{
    console.log(filesInfo)

  }

  return (
    <div className='p-5 flex justify-between items-center bg-[#f9f9f9]'>
        <h1 className='text-2xl font-bold text-[#6D4AFF]'>YCMC-You Copied My Code</h1>

        <div className='flex items-center'>
            <span className='flex mr-4 bg-[#fff] rounded shadow p-2 font-bold'>File Limit: 20</span>
            <span onClick={handle} className='flex mr-4 bg-[#fff] rounded shadow p-2 font-bold'>File Selected: 0</span>
        </div>
    </div>

  )
}