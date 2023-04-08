import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export default function SearchButton() {
  return (
    <div className='flex justify-center'>

        <button className='bg-[#6D4AFF] text-white text-xl flex items-center px-5 py-2 font-bold rounded w-fit'><AiOutlineSearch className='mr-1' size={30}/> Start Scanning</button>
    
    </div>

  )
}
