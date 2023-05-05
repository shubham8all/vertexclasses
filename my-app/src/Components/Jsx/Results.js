import React from 'react'
import Topper from '../svgs/topper.svg'
import SecondTopper from '../svgs/second-topper.svg'
import OurResults from '../svgs/OurResults.svg'
import '../Styles/Results.css'

const Results = () => {
  return (
    <>
        <p className='our-results'>Our Results</p>
        {/* <img src={OurResults} alt="Our Results"/> */}
        <div className='images'>
            <img src={SecondTopper} alt="Toppers Image"/>
            <img src={Topper} alt="Toppers Image"/>
        </div>
        <div className='lower-section-results'>
            .
        </div>
    </>
  )
}

export default Results