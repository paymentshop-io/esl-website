import React from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Hero from '../src/sections/Hero'
import Contact from '../src/sections/Contact'
import Careers from '../src/components/Career'
import Products from '../src/components/Product'

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Careers/>
      <Products/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default index