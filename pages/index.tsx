import React from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Hero from '../src/sections/Hero'
import Contact from '../src/sections/Contact'

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Contact/>
      <Footer />
    </div>
  )
}

export default index