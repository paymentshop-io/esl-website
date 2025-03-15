import React from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Hero from '../src/sections/Hero'
import Contact from '../src/sections/Contact'
import Careers from '../src/components/Career'
import Products from '../src/components/Product'
import OurCompany from '../src/components/OurCompany'
import OurprouctsFeat from '../src/sections/OurprouctsFeat'

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OurCompany/>
      <Careers/>
      <Products/>
      {/* <Contact/> */}
      <OurprouctsFeat />
      <Footer />
    </div>
  )
}

export default index