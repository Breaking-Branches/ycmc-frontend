import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { IoIosShareAlt } from 'react-icons/io'
import { AiOutlineDownload } from 'react-icons/ai'
import { useSelector } from 'react-redux'
export default function ScannedInfoDisplayed() {
    const similarityData = useSelector((state)=>state.finalDataReducer);
    const codeSnippets = similarityData.slice(1,similarityData.length)
                .map(data=>{return data[0]['code_snippets'].length+data[1]['code_snippets'].length})
                .reduce((acc, val) => acc + val, 0);
    const averagePercentage = similarityData.slice(1,similarityData.length).map(data=>{
        return data[0]['percentage']+data[1]['percentage']
    }).reduce((acc, val) => acc + val, 0);
    return (
        <div className='flex justify-center pt-12 px-20 '>

            <div className='border w-[60vw] p-4 flex'>
                <div className="flex shadow-xl flex-col justify-center items-center border-[10px] rounded-full border-[#6D4AFF] w-[120px] h-[120px]">
                    <h2 className='text-3xl font-bold'>{similarityData.length}</h2>
                    <p>/{similarityData[0][2]}</p>
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
                                <p className='mr-1 font-bold'>Total Checked:</p>
                                <span className=''>{similarityData.length*2}</span>
                            </div>
                            <div className='flex mt-1'>
                                <p className='mr-1 font-bold'>Similarities found: </p>
                                <span className=''>{similarityData.length-1}</span>
                            </div>
                        </div>

                        <div className='ml-10'>
                            <div className='flex mt-4'>
                                <p className='mr-1 font-bold'>Average Percentage: </p>
                                <span className=''>{Math.round(averagePercentage/(similarityData.length*2))}%</span>
                            </div>
                            <div className='flex mt-1'>
                                <p className='mr-1 font-bold'>Code Snippets:</p>
                                <span className=''>{codeSnippets}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
