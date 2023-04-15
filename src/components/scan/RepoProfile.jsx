import React from 'react'
import { TfiFiles } from 'react-icons/tfi'
import { BiGitRepoForked } from 'react-icons/bi'
import { useSelector } from 'react-redux';

export default function RepoProfile(props) {
  const reponame = props.reponame.length > 37
    ? props.reponame.slice(0, 37 - 3) + '...'
    : props.reponame;
  let extension = 0
  let files = 0
  const filesInfo = useSelector((state) => state.filesInfoReducer)[props.reponame];
  if (props.button) {
    extension = Object.keys(filesInfo).length
    files = 0
    for (let i in filesInfo) {
      files += filesInfo[i].length
    }
  }

  return (
    <div>

      <div className='bg-[#d0bcf5] p-4 rounded'>
        <div className='p-6 bg-white rounded flex justify-between items-center'>
          <h2 className='text-lg uppercase flex font-bold'>
            <BiGitRepoForked size={30} className='mr-2' />
            {reponame}
          </h2>
          {props.button &&

            <div className='flex'>
              <span className='px-3 py-2 mr-3 ml-3 flex items-center bg-[#2639ff] rounded text-white'>
                <TfiFiles className='mr-2' />{files}
              </span>
              <span className='px-3 py-2 flex items-center bg-[#2639ff] rounded text-white'>
                Extensions: {extension}
              </span>
            </div>
          }
        </div>
      </div>

    </div>
  )
}
