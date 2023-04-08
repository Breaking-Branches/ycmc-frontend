import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { IoIosShareAlt } from 'react-icons/io'
import { AiOutlineDownload } from 'react-icons/ai'

export default function ScannedInfoDisplayed() {
    return (
        <div className='flex justify-center pt-12 px-20 '>

            <div className='border w-[60vw] p-4 flex'>
                <div className="flex shadow-xl flex-col justify-center items-center border-[10px] rounded-full border-[#6D4AFF] w-[120px] h-[120px]">
                    <h2 className='text-3xl font-bold'>20</h2>
                    <p>/50</p>
                </div>

                <div className='w-[75%] ml-20'>
                    <div className='bg-gray-100 p-2 justify-between flex items-center text-green-600'>
                        <div className='flex items-center'>
                            <IoCheckmarkDoneCircle className='mr-3' />
                            Scanned Sucessfully
                        </div>


                        <div className='flex text-gray-600 '>
                            <div className="relative group mr-3 ">
                                <a href="https://sankalpa.info.np" className='mr-3'>
                                    <IoIosShareAlt size={25} />
                                </a>
                                <span className="bg-gray-800 text-white text-sm rounded-lg px-2 py-1 absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                                    Share
                                </span>
                            </div>


                            <div className="relative group mr-3 ">

                                <a href="https://sankalpa.info.np">
                                    <AiOutlineDownload size={25} />
                                </a>
                                <span className="bg-gray-800 text-white text-sm rounded-lg px-2 py-1 absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                                    Download
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className='flex'>


                        <div>
                            <div className='flex mt-4'>
                                <p className='mr-1 font-bold'>Total Checked: </p>
                                <span className=''>50</span>
                            </div>
                            <div className='flex mt-1'>
                                <p className='mr-1 font-bold'>Similarities found: </p>
                                <span className=''>20</span>
                            </div>
                        </div>

                        <div className='ml-10'>
                            <div className='flex mt-4'>
                                <p className='mr-1 font-bold'>Average Percentage: </p>
                                <span className=''>33%</span>
                            </div>
                            <div className='flex mt-1'>
                                <p className='mr-1 font-bold'>Code Snippets:</p>
                                <span className=''>110</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
