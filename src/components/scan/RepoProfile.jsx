import React from 'react'
import { TfiFiles } from 'react-icons/tfi'
import {BiGitRepoForked} from 'react-icons/bi'

export default function RepoProfile(props) {
  return (
    <div>


      <div className='bg-[#d0bcf5] p-4 rounded'>
        <div className='p-6 bg-white rounded flex  items-center'>
            <BiGitRepoForked size={30} className='mr-3'/>
          <h2 className='text-lg uppercase font-bold'>
          Sankalpa-Acharya/Karya
            </h2>
            { props.button &&
              
          <div className='flex'>
            <span className='px-3 py-2 mr-3 ml-3 flex items-center bg-[#2639ff] rounded text-white'>
              <TfiFiles className='mr-2' />40
            </span>
            <span className='px-3 py-2 flex items-center bg-[#2639ff] rounded text-white'>
              Similar Extensions: 9
            </span>
          </div>
}
        </div>
      </div>

    </div>
  )
}
