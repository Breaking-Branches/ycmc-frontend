import React from 'react'
import ScannedFilesInfoContainer from '../components/scan/ScannedFilesInfoContainer'
import NavBar from '../components/home/NavBar'
import Footer from '../components/home/Footer'
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import GetSimilaritiesButton  from '../components/buttons/GetSimilaritiesButton'

export default function SelectFilesPage(props) {
  const filesInfo = useSelector((state)=>state.filesInfoReducer);
  const repo1 = Object.keys(filesInfo)[0]
  const repo2 = Object.keys(filesInfo)[1]
  if (Object.keys(filesInfo).length===0){
    return (<Navigate to="/"/>)
  }

 

  return (
    <div className='overflow-x-hidden'>
        <NavBar></NavBar>
        <div className='flex justify-center mt-20 '>
        <GetSimilaritiesButton></GetSimilaritiesButton>


        </div>
        <div className='flex'>
            <ScannedFilesInfoContainer  reponame={repo1}></ScannedFilesInfoContainer>
            <ScannedFilesInfoContainer  reponame={repo2}></ScannedFilesInfoContainer>
        </div>
    <Footer></Footer>
    </div>
  )
}
