import React from 'react'
import ScannedInfoDisplayed from '../components/scan/ScannedInfoDisplayed'
import SimilarFiles from '../components/scan/SimilarFiles'
import Footer from '../components/home/Footer'
export default function ScannedResultPage() {
    return (

        <>
        <ScannedInfoDisplayed></ScannedInfoDisplayed>
        <div className=''>

        <SimilarFiles></SimilarFiles>

        </div>
        
        <Footer></Footer>
        </>
    )
}
