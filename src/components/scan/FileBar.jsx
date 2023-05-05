import React from 'react'
import {shortenFilePath} from '../../helper/shortenFilePath'

import extensionIcon from '../../helper/extensionIcon'
export default function FileBar(props) {

  const {name,icon} = extensionIcon(props.filename.split('.')[1],"mr-2")
  return (

    <div className='my-4'>
      <div className="relative group ml-1 ">
        <div className='flex relative z-0 rounded-lg'>
          <div className='flex items-center px-3 py-1 pr-5 bg-gray-100 relative left- z-30 rounded-lg border border-black rounded-r-none'>
            {icon}
            <p className=''>{shortenFilePath(props.filename)}</p>
          </div>
          <div className='w-[100%] rounded-lg flex justify-between z-20 items-center bg-gray-100'>
            <div style={{ width: `${props.value}%` }} className={`bg-[#3B71CA] relative rounded-l-none rounded-lg z-10 h-[100%]`}></div>
            <span className='absolute z-30 right-5'>
              {props.value}%
            </span>
          </div>
        </div>
        <div className="bg-gray-800 border text-white text-sm rounded-lg px-2 py-1 absolute bottom-full left-0 transform opacity-0 invisible group-hover:opacity-100 group-focus:opacity-100 group-hover:visible group-focus:visible transition w-fit duration-300">

          <div className='py-1 max-h-52 scroll-div overflow-auto'>
            <p className='mb-2'>{props.filename}</p>
            {props.codeSnippetes.map(code => {
              return (
                <a key={Math.random()} rel="noreferrer" target="_blank" href={`https://github.com/${props.reponame}/blob/${props.branch}/${props.filename}#L${code[0]}-L${code[1]}`} className='underline'>
                  <h5 className='font-bold mb-1'>
                    <span className='text-orange-600'>#</span>
                    L{code[0]}-L{code[1]}
                  </h5>
                </a>
              )


            })

            }
          </div>
        </div>
      </div>
    </div>

  )
}
