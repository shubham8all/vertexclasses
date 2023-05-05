import React from 'react'
import '../Styles/MethodologyCard.css'
import Star from '../svgs/Star.svg'
import Teacher from '../svgs/Teacher.svg'
import RightArrow from '../svgs/RightArrow.svg'
import LeftArrow from '../svgs/LeftArrow.svg'
import SemiCircle from '../svgs/SemiCircle.svg'

const MethodologyCard = (props) => {
  return (
    <>
        <div className='container' style={{background:props.colorName}}>
            <div className='firsty'>
                <span className='star'><img src={RightArrow} alt="Style Element"/></span>
                <img src={Teacher} alt="Style Element"/>
                <img src={Star} alt="Style Element"/>
            </div>
            <div className='secondy'>
                <p className='secondy-header'>EXP. & QUALIFIED FACULTY TEAM</p>
                <p className='actual-facilities'>⦿ Faculty team from IITs, NITs, and top
Colleges</p>
<p className='actual-facilities'>⦿ Average experience is more than 8 years.</p>
<p className='actual-facilities'>⦿ Vast experience of teaching thousands of 
students.</p>
<br />
<p className='learn-more'>Learn More ➡</p>
            </div>
            <div className='thirdy'>
            <img src={SemiCircle} alt="Style Element"/>
            <img src={LeftArrow} alt="Style Element"/>
            </div>
        </div>
    </>
  )
}

export default MethodologyCard