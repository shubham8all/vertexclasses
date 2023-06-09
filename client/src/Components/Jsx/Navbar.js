import React from 'react'
import '../Styles/Navbar.css'
// import  Button from './Button'
import Announcements from '../svgs/Announcements.svg'
import AnnouncementsMobile from '../svgs/AnnouncementMobile.svg'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import MarqueeModified from '../Jsx/MarqueeModified'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigateToSignin=()=>{
    navigate("/sign-in");
  }
  const [click,setClick]=useState(false);
  function handleClick()
  {
      if(click===false)
      setClick(true);
      else
      setClick(false);
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    // const messageAnnouncement="New Batch for Class XII is starting from 12th May";
    const [navbarColour, setNavbarColour]=useState(false);
    function handleNavbarWhileScrolling()
    {
        if(window.scrollY>=100)
        setNavbarColour(true);
        else
        setNavbarColour(false);
    };

    window.addEventListener("scroll",handleNavbarWhileScrolling);
  return (
    <>
        <div className={navbarColour?"navbar heading-bg":"navbar"}>
            <div className='nav-logo'><span className='vertex'>Vertex</span><span> </span><span className='classes'>Classes</span></div>
            <div className={click?'nav-items-mobile':'nav-items'}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutus">AboutUs</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/admission">Admission</NavLink></li>
            <li><NavLink to="/studentzone">Student Zone</NavLink></li>
            {/* <Button buttonName='Sign In' /> */}
            <button className='btn' onClick={handleNavigateToSignin}>Sign In</button>
            </div>
            <div className="mobile-menu-icon" onClick={handleClick}>
            {click?
                (<FaTimes size={20} style={{color:"white"}}/>):
                (<FaBars size={20} style={{color:"white"}}/>)
            }
    </div>
        </div>
        <div className='announcement'>
        <div className='announcement-img'>
        {/* <img src={Announcements} alt="announcements.svg"/> */}
        {/* {AnnouncementsImage} */}
        {width > 1000 ? (
        <img src={Announcements} alt="AnnouncementsImage" />
      ) : (
        <img src={AnnouncementsMobile} alt="AnnouncementsImage" />
      )}
        </div>
        <MarqueeModified message="New Batch for Class XII is starting from 12th May"/>
        </div>
    </>
  )
}

export default Navbar
