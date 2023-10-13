import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Services from './components/Services'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Gallery />
      <Services />
      <ContactUs />
    </div>
  )
}

export default App