import React, { useState,useEffect } from 'react'
import ScannedInfoDisplayed from '../components/scan/ScannedInfoDisplayed'
import SimilarFiles from '../components/scan/SimilarFiles'
import Footer from '../components/home/Footer'
import { useParams } from "react-router-dom";
import Loader from '../components/loader/Loader';
import { url} from '../../src/ConfigConstants'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {getSimilarityAction} from '../redux/actions/finalDataAction'


export default  function ScannedResultPage(props) {
    const dispatch = useDispatch()
    const fetchData = async (uuid) => {
        const response = await axios({
          method: 'post',
          url: `${url}/detect/${uuid}`,
        })
        const data = await response.data
        return data
      }
      const { uuid } = useParams();
      const [isLoading, setLoading] = useState(true)
      const filesInfo = useSelector((state) => state.filesInfoReducer)
    
      useEffect(() => {
        const getData = async () => {
          const data = await fetchData(uuid);
          dispatch(getSimilarityAction(data))
          setLoading(false);
        }
        if (Object.keys(filesInfo).length !== 0) {
          setLoading(false);
        } else {
          getData();
        }
      }, [filesInfo, uuid,dispatch])
    


    return (
        <>
        {
            isLoading ? <Loader loading={isLoading}></Loader> :
        <div className='overflow-x-hidden'>
        <ScannedInfoDisplayed></ScannedInfoDisplayed>
        <div className=''>

        <SimilarFiles></SimilarFiles>

        </div>
        
        <Footer></Footer>
        </div>
        }
        </>
    )
}
