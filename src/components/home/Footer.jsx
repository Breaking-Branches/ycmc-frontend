import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='flex py-4 justify-center bg-gray-50 mt-[20vh] px-16 border-t-2'>


        <a href="https://sankalpa.info.np" className='text-xl mr-4 font-bold'>
          <FaGithub size={28}/>
        </a>
        <a href="https://sankalpa.info.np" className='text-xl mr-4 font-bold'>
          <AiFillLinkedin size={28}/>
        </a>
        <a href="https://sankalpa.info.np" className='text-xl  font-bold'>
          <AiOutlineTwitter size={28}/>
        </a>

    </div>
  )
}
