import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { url} from '../../../src/ConfigConstants'
import { getSimilarityAction } from '../../redux/actions/finalDataAction'
export default function GetSimilaritiesButton() {
  const dispatch = useDispatch()
  const warn = (msg) => {
    toast.warn(`${msg}`, {
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

  const test = useSelector((state) => state.selectedFileInfoReducer);
  const filesInfo = useSelector((state) => state.filesInfoReducer);
  const [isLoading, setisLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const repo1 = Object.values(Object.values(test)[0])
    .map((file) => file.length)
    .reduce((acc, val) => acc + val, 0);
  const repo2 = Object.values(Object.values(test)[1])
    .map((file) => file.length)
    .reduce((acc, val) => acc + val, 0);
  const sendData = async () => {
    if (Object.keys(Object.values(filesInfo)[0]).length === 0) {
      warn('No file Found')
      return -1
    }
    if (repo1 + repo2 > 20) {
      warn('File Limit Exceed')
    }
    else {

      setisLoading(true);
      const response = await axios({
        method: 'post',
        url: `${url}/detect/${filesInfo.uuid}`,
        data: test
      })
      const data = await response.data
      if (data.length === 0) {
        setisLoading(false);
        warn('No Similarity Found')
        return -1;
      }
      if (!data.errors) {
        dispatch(getSimilarityAction(data))
        setisLoading(false)
        setSucess(true)
      }
    }

  }
  if (sucess) {
    return (<Navigate to={`/scanned/${filesInfo.uuid}`} />)
  }



  return (
    <>
      {
        isLoading ? <Loader loading={isLoading}></Loader> :
          <button onClick={sendData} className='bg-[#6D4AFF] cursor-pointer text-white text-xl flex items-center px-5 py-2 font-bold rounded w-fit'> Get Similarities</button>
      }
    </>
  )
}