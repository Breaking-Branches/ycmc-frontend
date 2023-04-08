import React from 'react'
import FileInfo from './FileInfo'
import RepoProfile from './RepoProfile'

export default function ScanResult() {
  return (
    <div className='w-[50%] mt-5 mx-6 p-4 border'>
      <RepoProfile button='true'></RepoProfile>
      <div>

        <FileInfo></FileInfo>        
        <FileInfo></FileInfo>        

      </div>

    </div>
  )
}