import React from 'react'
import NavbarWithoutSignIn from '../Components/Jsx/NavbarWithoutSignIn'
import Hero from '../Components/Jsx/Hero'
import Methodology from '../Components/Jsx/Methodology'
import CoursesOffered from '../Components/Jsx/CoursesOffered'
import Results from '../Components/Jsx/Results'
import ContactUs from '../Components/Jsx/ContactUs'
import Footer from '../Components/Jsx/Footer'

const RouteHome = () => {
  return (
    <>
        <NavbarWithoutSignIn />
        <Hero />
        <Methodology />
        <CoursesOffered />
        <Results />
        <ContactUs />
        <Footer />
    </>
  )
}

export default RouteHome
