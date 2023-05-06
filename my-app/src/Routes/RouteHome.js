import React from 'react'
import Navbar from '../Components/Jsx/Navbar'
import Methodology from '../Components/Jsx/Methodology'
import CoursesOffered from '../Components/Jsx/CoursesOffered'
import Results from '../Components/Jsx/Results'
import ContactUs from '../Components/Jsx/ContactUs'
import Footer from '../Components/Jsx/Footer'

const RouteHome = () => {
  return (
    <>
        <Navbar />
        <Methodology />
        <CoursesOffered />
        <Results />
        <ContactUs />
        <Footer />
    </>
  )
}

export default RouteHome