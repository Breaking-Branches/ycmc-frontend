import React from 'react'
import ScanResult from '../components/scan/ScanResult'
import Hero from '../components/home/Hero'
import Footer from '../components/home/Footer'

export default function SelectFilesPage() {
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
