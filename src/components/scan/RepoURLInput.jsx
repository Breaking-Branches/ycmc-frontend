import React from 'react'

export default function RepoURLInput(props) {
  return (
    <div className='md:w-[50%] w-[80%] md:p-7 py-2'>

      <div className="md:mb-4 mb-2">
        <input className="bg-gray-100 appearance-none border-2 h-12 rounded w-full py-2 px-4
                     text-gray-700 leading-tight focus:outline-none
                     focus:bg-white focus:border-purple-500 border-gray-300"
          id="inline-full-name" type="text" placeholder={props.placeHolder} onChange={

            (e) => {
              props.onChange(props.repo, e.target.value)
            }

          } />
      </div>

    </div>

  )
}
