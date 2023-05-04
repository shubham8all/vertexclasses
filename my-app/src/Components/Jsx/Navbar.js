import React from 'react'
import '../Styles/Navbar.css'
import  Button from './Button'
import Announcements from '../svgs/Announcements.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const messageAnnouncement="New Batch for Class XII is starting from 12th May";
  return (
    <>
        <nav className='navbar'>
            <div className='nav-logo'><span className='vertex'>Vertex</span><span> </span><span className='classes'>Classes</span></div>
            <div className='nav-items'>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>AboutUs</NavLink></li>
            <li><NavLink>Admission</NavLink></li>
            <li><NavLink>Student Zone</NavLink></li>
            <Button buttonName='Sign In' />
            </div>
        </nav>
        <div className='announcement'>
        <div className='announcement-img'>
        <img src={Announcements} alt="announcements.svg"/>
        </div>
        <marquee>
            <p className='marquee-section'><span className='for-space'></span><span className='marquee-text'>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}</span><span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}<span className='for-space'></span>|<span className='for-space'></span>{messageAnnouncement}</p>
        </marquee>
        </div>
    </>
  )
}

export default Navbar