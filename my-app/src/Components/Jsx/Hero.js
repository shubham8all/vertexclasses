import React from 'react'
import '../Styles/Hero.css'
import HeroImage from '../svgs/HeroImage.svg'
import HeroArrow from '../svgs/heroArrow.svg'
import HeroArrow2 from '../svgs/heroArrow2.svg'
import HeroStar from '../svgs/heroStar.svg'
import HeroStar1 from '../svgs/heroStar1.svg'
import LetsPrepareToday from '../svgs/letspreparetoday.svg'
import ForBetter from '../svgs/forbetter.svg'
import Tomorrow from '../svgs/tomorrow.svg'
import HeroMarquee from './HeroMarquee'

const Hero = () => {
  return (
    <>
    <div className='hero-section'>
        <div className='left-section'>
            <span className='lets-prepare-today'>{/*Let's Prepare today*/}<img src={LetsPrepareToday} alt="Lets Prepare Today"/><span><img src={HeroStar} alt="star"/></span></span>
        
            <div className='second-line'>
            <img src={HeroArrow} alt="towards-right"/>
            <span className='for-better'>{/*For Better*/}<img src={ForBetter} alt="For Better"/></span>
            </div>
            <span className='third-line'>
            <span className='tomorrow'><span><img src={HeroStar1} alt="star"/></span>{/*Tomorrow*/}<img src={Tomorrow} alt="Tomorrow"/></span>
            <span><img src={HeroArrow2} alt="towards-left"/></span>
            </span>
        </div>
        <div className='right-section'>
            <img src={HeroImage} alt="Best Performer"/>
        </div>
        </div>
        <div className='lower-hero-section'>
        <HeroMarquee />
        </div>
    </>
  )
}

export default Hero