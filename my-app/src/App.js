import React from 'react'
import Navbar from './Components/Jsx/Navbar'
import Hero from './Components/Jsx/Hero'
import Footer from './Components/Jsx/Footer'
import Results from './Components/Jsx/Results'
import ContactUs from './Components/Jsx/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Results />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App