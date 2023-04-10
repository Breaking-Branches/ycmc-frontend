import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import RepoURLInput from './RepoURLInput'
import ScanResult from './ScanResult'
import { filesInfoFetchAction } from '../../redux/actions/filesInfoFetchAction'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Loader from '../loader/Loader';

// make whole cloud like in coc

export default function ScanHomePage() {
  const dispatch = useDispatch();
  const filesInfo = useSelector((state) => state.filesInfoReducer);
  const [url1, setURL1] = useState('')
  const [url2, setURL2] = useState('')
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    console.log(filesInfo)
  }, [filesInfo])

  const fetchFiles = async (e) => {
    setLoading(true)
    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/files',
        data: {
          repo1_url: url1,
          repo2_url: url2
        }
      })
      setLoading(false)
      await dispatch(filesInfoFetchAction(response.data))

    }
    catch (e) {
      setLoading(false)
      toast.warn(e.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }

  };

  const setRepoURL = (repo, value) => {
    repo === "repo1" ? setURL1(value) : setURL2(value)
  }

  return (
    <>
      {
        isLoading ?
          <Loader loading={isLoading}></Loader>
          :
          <div className='flex mt-[40px] mb-12 justify-center'>

            <ToastContainer />
            <div className='w-[98%]  flex flex-col p-4'>

              <div className='flex'>
                <RepoURLInput repo="repo1" onChange={setRepoURL} placeHolder={'Breaking-Branches/BB-Offical-Site'}></RepoURLInput>
                <RepoURLInput repo="repo2" onChange={setRepoURL} placeHolder={'Breaking-Branches/ycmc'}></RepoURLInput>
              </div>

              <div className='flex justify-center'>

                <button className='bg-[#6D4AFF] text-white text-xl flex items-center px-5 py-2 font-bold rounded w-fit' onClick={fetchFiles} ><AiOutlineSearch className='mr-1' size={30} /> Start Scanning</button>

              </div>

              {/* <div className='flex'>

          <ScanResult></ScanResult>
          <ScanResult></ScanResult>

        </div> */}

            </div>
          </div>
      }

    </>

  )
}
