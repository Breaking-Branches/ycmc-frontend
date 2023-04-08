import React from 'react'
import { FaPython } from 'react-icons/fa'
export default function FileBar(props) {
    return (

<div className='my-7 '>
  <div className="relative group mr-3">
    <div className='flex relative z-0 bg-pink-200 rounded-lg'>
      <div className='flex items-center px-3 py-1 pr-5 bg-gray-100 relative left- z-30 rounded-lg border border-black rounded-r-none'>
        <FaPython className='mr-2' size={22} />
        <p className=''>work/main.py</p>
      </div>
      <div className='w-[79%] rounded-lg flex justify-between z-20 items-center bg-gray-100'>
        <div style={{ width: `${props.value}%` }} className={`bg-[#3B71CA] relative rounded-l-none rounded-lg z-10 h-[100%]`}></div>
        <span className='absolute z-30 right-2'>
          {props.value}%
        </span>
      </div>
    </div>
    <div className="bg-gray-800 border text-white text-sm rounded-lg px-2 py-1 absolute bottom-full left-0 transform opacity-0 invisible group-hover:opacity-100 group-focus:opacity-100 group-hover:visible group-focus:visible transition w-[30%] duration-300">
        
        <div className='py-1 max-h-52 scroll-div overflow-auto'>
            <a href="https://github.com/Sankalpa-Acharya/Karya/blob/master/static/base.css#L3-L22" className='underline'>
            <h5 className='font-bold mb-1'>
                <span className='text-orange-600'>#</span>
                L3-L23
             </h5>
             </a>
            <a href="https://github.com/Sankalpa-Acharya/Karya/blob/master/static/base.css#L3-L22" className='underline'>
            <h5 className='font-bold mb-1'>
                <span className='text-orange-600'>#</span>
                L30-L40
             </h5>
             </a>

        </div>

      
    </div>
  </div>
</div>

    )
}
