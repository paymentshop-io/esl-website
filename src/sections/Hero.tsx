import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-center bg-cover bg-no-repeat h-[90vh] lg:h-[84vh] bg-hero'>
        <div className='w-full px-3 md:px-8 lg:px-[96px] h-full grid md:grid-cols-2 items-center bg-black bg-opacity-40'>
            <div>
                <h1 className='md:text-7xl text-5xl text-center md:text-left leading-[1] text-white font-bold font-ageo'>Helping <br/> Businesses <span className='text-[#3bc330]'>Grow</span>  <br/>in Africa.</h1>

                <button className='font-sora text-white h-[65px] border border-white mx-auto md:mx-0 block rounded-lg w-[250px] font-[500] my-8 text-xl bg-[#fb5607]'>Contact Sale</button>

            </div>

        </div>

    </div>
  )
}

export default Hero