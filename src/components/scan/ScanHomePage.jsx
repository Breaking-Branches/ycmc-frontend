import React from 'react'
import SearchButton from '../SearchButton'
import Search from './SearchInput'
import ScanResult from './ScanResult'


export default function ScanHomePage() {
  return (
    <div className='flex mt-[40px] mb-12 justify-center'>
    <div className='w-[98%]  flex flex-col p-4'>

        <div className='flex'>
        <Search value={'https://github.com/Breaking-Branches/BB-Offical-Site'}></Search>
        <Search value={'https://github.com/Breaking-Branches/ycmc'}></Search>
        </div>
        <SearchButton  ></SearchButton>
        <div className='flex'>

        <ScanResult></ScanResult>
        <ScanResult></ScanResult>

        </div>

    </div>
    </div>
  )
}
