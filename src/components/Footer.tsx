import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const date = new Date()
  return (

    <div className='w-full lg:h-[90vh] md:px-[96px] px-8 py-16  text-white bg-footer bg-default-blue bg-no-repeat bg-center bg-cover'>
      <div className='flex h-full flex-wrap gap-y-8'>
        <div className='lg:w-1/4 md:w-1/2 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Products</h3>
          <ul className=''>
            <li className='mt-3 text-gray-200'>
              <Link href="http://paycentreafrica.com">Paycentre</Link>
            </li>
            <li className='mt-3 text-gray-200'>
              <Link href="https://www.yeppay.io">Yep!</Link>
            </li>
          </ul>
        </div>
        <div className='lg:w-1/4 md:w-1/2 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Company</h3>
          <ul className=''>
            <li className='mt-3 text-gray-200'>
              <Link href="">About us</Link>
            </li>
            <li className='mt-3 text-gray-200'>
              <Link href="">What we do</Link>
            </li>
            <li className='mt-3 text-gray-200'>
              <Link href="">Careers</Link>
            </li>
          </ul>
        </div>
        <div className='lg:w-1/4 md:w-1/2 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Learn</h3>
          <ul className=''>
            <li className='mt-3 text-gray-200'>
              <Link href="">Blog</Link>
            </li>
            <li className='mt-3 text-gray-200'>
              <Link href="">Community</Link>
            </li>
          </ul>
        </div>
        <div className='lg:w-1/4 md:w-1/2 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Legal</h3>
          <ul className=''>
            <li className='mt-3 text-gray-200'>
              <Link href="">Privacy Policy</Link>
            </li>
            <li className='mt-3 text-gray-200'>
              <Link href="">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className='lg:w-1/4 hidden mt-6 md:block md:w-1/2 w-full mx-auto'>
          <img src='/assets/ESL-LETTER.svg' />
        </div>
        <div className='lg:w-1/4 md:w-1/2 mt-6 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Contact</h3>
          <ul className=''>
            <li className='mt-3 text-gray-200 text-base'>
              info@esettlementgroup.com
            </li>
            <li className='mt-3 text-gray-200 flex gap-2'>
              <Link href=""><img src='/assets/twitter.svg' className='w-6 md:w-8 h-auto'  /></Link>
              <Link href=""><img src='/assets/linkedin.svg' className='w-6 md:w-8 h-auto' /></Link>
            </li>
          </ul>
        </div>
        <div className='lg:w-1/4 md:w-1/2 mt-6 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Lagos</h3>
          <ul className=''>
            <p className='text-base mt-3'>13, Hughes Avenue, Alagomeji <br/>Yaba, Lagos</p>
          </ul>
        </div>
        <div className='lg:w-1/4 md:w-1/2 mt-6 w-full mx-auto'>
          <h3 className='font-bold md:text-xl text-lg'>Cote D'Ivoire</h3>
          <ul className=''>
            <p className='text-base mt-3'>13, Hughes Avenue, Alagomeji <br/>Yaba, Lagos</p>
          </ul>
        </div>
        <div className='lg:w-1/4 md:hidden mt-6 block md:w-1/2 w-full mx-auto'>
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-[#022295]"
          >
            <img className="h-10 w-auto" alt="G" src="/assets/ESL Logo.svg" />
          </Link>
        </div>
      </div>

      <div>
        <h3 className='text-center text-gray-200 mx-auto mt-10 md:mt-0'>© {date.getFullYear()} E-Settlement Inc.</h3>
      </div>

    </div>
  )
}

export default Footer