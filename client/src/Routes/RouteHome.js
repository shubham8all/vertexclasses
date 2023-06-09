import React from 'react'
import Navbar from '../Components/Jsx/Navbar'
import Hero from '../Components/Jsx/Hero'
import Methodology from '../Components/Jsx/Methodology'
import CoursesOffered from '../Components/Jsx/CoursesOffered'
import Results from '../Components/Jsx/Results'
import ContactUs from '../Components/Jsx/ContactUs'
import Footer from '../Components/Jsx/Footer'
import Signup from '../Components/Jsx/Signup'
import SignIn from '../Components/Jsx/SignIn'

const RouteHome = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Methodology />
        <CoursesOffered />
        <Results />
        <ContactUs />
        <Signup />
        <SignIn />
        <Footer />
    </>
  )
}

export default RouteHome