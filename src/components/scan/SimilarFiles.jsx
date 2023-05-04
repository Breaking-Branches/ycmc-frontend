import React, { useState } from 'react'
import FileBar from './FileBar'
import RepoProfile from './RepoProfile'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import {BsArrowDownCircleFill} from 'react-icons/bs'

export default function SimilarFiles() {
  const [slicen,setSlice] = useState(5)

  const test = useSelector((state)=>state.finalDataReducer).sort((a, b) => {
    const maxPercentageA = Math.max(...a.map(obj => obj.percentage));
    const maxPercentageB = Math.max(...b.map(obj => obj.percentage));
    return maxPercentageB - maxPercentageA;
  });
  const reponame1 = test[0][1]
  const reponame2 = test[0][0]
  if(test.length===0){
    return <Navigate to="/"/>
  }
  return (
    <>

      <div className='px-16 mt-10 flex '>

        <div className='w-[50%] mr-10'>

          <RepoProfile key={Math.random()} reponame={reponame1}></RepoProfile>
        </div>
        <div className='w-[50%]'>

          <RepoProfile  key={Math.random()} reponame={reponame2}></RepoProfile>
        </div>

      </div>

      <div className='px-16 flex flex-col mt-10'>

      {
        test.slice(1,slicen).map((data)=>{
          return(
          <div className='flex'>
          <div className=' w-[50%] mr-10'>
            <FileBar key={Math.random()} reponame={reponame1} branch={data[0].branch} filename={data[0].filename} codeSnippetes={data[0].code_snippets} value={data[0].percentage}></FileBar>
          </div>
          <div className=' w-[50%]'>
            <FileBar key={Math.random()} reponame={reponame2} branch={data[1].branch} filename={data[1].filename} codeSnippetes={data[1].code_snippets} value={data[1].percentage}></FileBar>
          </div>
          </div>)

        }) 
}
  <div className={`flex justify-center mt-10 cursor-pointer ${test.length<=slicen ? 'hidden' : 'block'}`} onClick={()=>{setSlice(slicen+5)}}>
    <div className='px-7 py-1 flex items-center bg-gray-100 rounded-lg'>
      <BsArrowDownCircleFill size={20} className="mr-2"/>
      <p className='text-md'>Show More</p>
    </div>
  </div>




      </div>
    </>


  )
}
