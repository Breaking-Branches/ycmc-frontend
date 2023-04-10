import React from 'react'
import ScanResult from '../components/scan/ScanResult'
import Hero from '../components/home/Hero'
import Footer from '../components/home/Footer'
import {useDispatch,useSelector} from 'react-redux'

export default function SelectFilesPage() {
  const dispatch = useDispatch();
  const filesInfo = useSelector((state)=>state.filesInfoReducer);
  console.log(filesInfo)
  return (
    <div className=''>

        <Hero  des="Select files of which you wanna detect Similarities"></Hero>
        <div className='flex mt-10'>

            <ScanResult></ScanResult>
            <ScanResult></ScanResult>
        </div>
    <Footer></Footer>
    </div>
  )
}
