import React from 'react'
import FileInfo from './FileInfo'
import RepoProfile from './RepoProfile'
import { useSelector } from 'react-redux';

export default function ScannedFilesInfoContainer(props) {
  const filesInfo = useSelector((state) => state.filesInfoReducer)[props.reponame];
  return (
    <div className='w-[48%] mt-5 mx-4 p-4 border '>
      <RepoProfile button='true' reponame={props.reponame}></RepoProfile>
      <div className=''>

        { 
          Object.keys(filesInfo).sort().map((ex) => {
            return (
              <FileInfo send={props.send}  extension={ex} key={Math.random()} reponame={props.reponame} ></FileInfo>
            )
          })
        }

      </div>

    </div>
  )
}