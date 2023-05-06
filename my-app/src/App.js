import React from 'react'
import Navbar from './Components/Jsx/Navbar'
import Hero from './Components/Jsx/Hero'
import Footer from './Components/Jsx/Footer'
import Results from './Components/Jsx/Results'
import ContactUs from './Components/Jsx/ContactUs'
import CoursesOffered from './Components/Jsx/CoursesOffered'
import Methodology from './Components/Jsx/Methodology'
// import MethodologyCard from './Components/Jsx/MethodologyCard'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Methodology />
      <CoursesOffered />
      <Results />
      <ContactUs />
      <Footer />
      {/* <MethodologyCard /> */}
    </div>
  )
}

export default App