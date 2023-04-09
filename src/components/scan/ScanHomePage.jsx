import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import RepoURLInput from './RepoURLInput'
import ScanResult from './ScanResult'
import axios from 'axios'

// make whole cloud like in coc

export default function ScanHomePage() {

  const [url1, setURL1] = useState('')
  const [url2, setURL2] = useState('')

  const fetchFiles = async (e) => {

   const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/files',
      data:{
        repo1_url: url1,
        repo2_url: url2
    }
    })
    console.log(response.data)



  };

  const setRepoURL = (repo, value) => {
    repo === "repo1" ? setURL1(value) : setURL2(value)
  }

  return (
    <div className='flex mt-[40px] mb-12 justify-center'>
      <div className='w-[98%]  flex flex-col p-4'>

        <div className='flex'>
          <RepoURLInput repo="repo1" onChange={setRepoURL} placeHolder={'Breaking-Branches/BB-Offical-Site'}></RepoURLInput>
          <RepoURLInput repo="repo2" onChange={setRepoURL} placeHolder={'Breaking-Branches/ycmc'}></RepoURLInput>
        </div>

        <div className='flex justify-center'>

          <button className='bg-[#6D4AFF] text-white text-xl flex items-center px-5 py-2 font-bold rounded w-fit' onClick={fetchFiles} ><AiOutlineSearch className='mr-1' size={30}  /> Start Scanning</button>

        </div>

        {/* <div className='flex'>

          <ScanResult></ScanResult>
          <ScanResult></ScanResult>

        </div> */}

      </div>
    </div>
  )
}
