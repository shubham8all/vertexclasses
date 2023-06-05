import React from 'react'
import '../Styles/Subsection.css'
import MarqueeForSubsection from './MarqueeForSubsection';

const Subsection11th = () => {
    return (
        <>
        <div className='subsection'>
            <div className='heading-subsection'>Class XI</div>
            <MarqueeForSubsection />
            <p className='subsection-content'>
            At Vertex Classes, Class XI students can avail themselves of comprehensive coaching programs for JEE ( Main + Advanced ), JEE Main, NEET, CBSE, and BSEB courses.<br/><br />

The JEE ( Main + Advanced ) program is tailored to equip students with the necessary knowledge and problem-solving skills required for the highly competitive Joint Entrance Examination.<br /><br /> 

The JEE Main program focuses on building a strong foundation in physics, chemistry, and mathematics to excel in the JEE Main exam. <br /><br />

For those aspiring to pursue a career in medicine, the NEET program provides rigorous coaching in biology, chemistry, and physics to crack the National Eligibility cum Entrance Test. <br /><br />

Additionally, Vertex Classes offers courses aligned with the CBSE and BSEB curricula for Class XI students.<br /><br />
            </p>
            <div className='btn-brochure-apply'>
            <button className='btn-brochure'>Brochure 23-24</button>
            <button className='btn-apply'>Apply Now</button>
            </div>
            </div>
        </>
    )
}
 
export default Subsection11th;