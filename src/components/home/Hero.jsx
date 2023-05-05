import React from 'react'
import shape from '../../assets/bg-shape.png'

export default function Hero(props) {
  return (
    <div className='flex flex-col  relative items-center prose justify-center'>
        <img className='absolute z-0 left-0' src={shape} alt="" />
    <h1 className='md:text-5xl text-3xl relative z-10 font-extrabold mt-[100px] text-[#6D4AFF]'>📁You Copied My Code ?</h1>
    <p className='mt-6 w-[70%] md:w-[30%] text-center'>{props.des}</p>

    </div>
  )
}
