import React from 'react'

export default function RepoURLInput(props) {
  return (
    <div className='w-[50%] p-7'>

      <div className="mb-4">
        <input className="bg-gray-100 appearance-none border-2 h-12 rounded w-full py-2 px-4
                     text-gray-700 leading-tight focus:outline-none
                     focus:bg-white focus:border-purple-500 border-gray-300"
          id="inline-full-name" type="text" placeholder={props.placeHolder} onChange={
              
            (e)=>{
              props.onChange(props.repo,e.target.value)
            }
            
            } />
      </div>

    </div>

  )
}
