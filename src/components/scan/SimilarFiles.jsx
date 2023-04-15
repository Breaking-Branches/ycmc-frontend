import React from 'react'
import FileBar from './FileBar'
import RepoProfile from './RepoProfile'

export default function SimilarFiles() {
  return (
    <>

      <div className='px-16 mt-10 flex '>

        <div className='w-[50%] mr-10'>

          <RepoProfile reponame={"sankalpa/acharya"}></RepoProfile>
        </div>
        <div className='w-[50%]'>

          <RepoProfile reponame={"sankalpa/acharya"}></RepoProfile>
        </div>

      </div>

      <div className='px-16 flex mt-10'>
        <div className=' w-[50%] mr-10'>
          <FileBar value={10}></FileBar>
          <FileBar value={30}></FileBar>
          <FileBar value={81}></FileBar>
        </div>
        <div className=' w-[50%]'>
          <FileBar value={60}></FileBar>
          <FileBar value={20}></FileBar>
          <FileBar value={70}></FileBar>
        </div>
      </div>
    </>


  )
}
