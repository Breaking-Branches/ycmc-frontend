import React from 'react'
import RingLoader from "react-spinners/RingLoader";

export default function Loader(props) {




  return (

    <div className='absolute overflow-hidden h-screen border top-0 flex flex-col justify-center items-center bg-white w-screen z-50'>
     <RingLoader
      color={"#6D4AFF"}
      loading={props.isLoading}
      size={140}
    /> 
    <p className='mt-7'>Scanning...This will take a few moments</p>
    </div>

  )
}
