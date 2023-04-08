import React from 'react'
import shape from '../../assets/bg-shape.png'

export default function Hero() {
  return (
    <div className='flex flex-col  items-center prose justify-center'>
        <img className='absolute left-0' src={shape} alt="" />
    <h1 className='text-5xl font-extrabold mt-[100px] text-[#6D4AFF]'>📁You Copied My Code ?</h1>
    <p className='mt-6 w-[30%] text-center'>Wanna See code similarity between two github repo ?, YCMC is a tool which checks code similarity between two repo files</p>

    </div>
  )
}
