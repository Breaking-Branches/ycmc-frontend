import React, { useState } from 'react'
import ScannedFilesInfoContainer from '../components/scan/ScannedFilesInfoContainer'
import NavBar from '../components/home/NavBar'
import Footer from '../components/home/Footer'
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function SelectFilesPage() {
  const filesInfo = useSelector((state)=>state.filesInfoReducer);
  const repo1 = Object.keys(filesInfo)[0]
  const repo2 = Object.keys(filesInfo)[1]
  const [send,setSend] = useState(false)
  console.log('selectFilePage')
  if (Object.keys(filesInfo).length===0){
      return (<Navigate to="/"/>)
  }
  const sendData = ()=>{
    setSend(true);
  }

  return (
    <div className=''>
        <NavBar></NavBar>
        <div className='flex justify-center mt-20 '>
        <button className='bg-[#6D4AFF] text-white text-xl flex items-center px-5 py-2 font-bold rounded w-fit' onClick={sendData}> Get Similarities</button>

        </div>
        <div className='flex'>
            <ScannedFilesInfoContainer send={send}  reponame={repo1}></ScannedFilesInfoContainer>
            <ScannedFilesInfoContainer send={send} reponame={repo2}></ScannedFilesInfoContainer>
        </div>
    <Footer></Footer>
    </div>
  )
}
