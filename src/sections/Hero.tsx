import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-center bg-cover bg-no-repeat h-[90vh] lg:h-[84vh] bg-hero'>
        <div className='w-full px-3 md:px-8 lg:px-[96px] h-full grid lg:grid-cols-2 items-center bg-black bg-opacity-40'>
            <div>
                <h1 className='md:text-7xl capitalize text-5xl text-center lg:text-left leading-[1] text-white font-bold font-ageo'>Enabling <br/> business growth <span className='text-[#3bc330]'>through</span> <br/> seamless payment collections.</h1>

                <button className='font-sora text-white h-[65px] border border-white mx-auto lg:mx-0 block rounded-lg w-[250px] font-[500] my-8 text-xl bg-[#fb5607]'>Contact Sales</button>

            </div>

        </div>

    </div>
  )
}

export default Hero