import React from 'react'

const OurprouctsFeat = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
      <div className='flex justify-between'>
        <div>
          <h3 className='font-sora text-4xl md:text-6xl'>Our Product <span className='font-bold'><br />Innovative Features</span></h3>
        </div>

      </div>

      <div className='flex py-8 my-4 flex-wrap gap-5 items-center justify-evenly'>
        <div className='rounded-xl w-[340px] h-[414px] px-3 py-3 bg-[#ffbe0b]'>

          <div className='w-[302px] mx-auto my-8 h-[170px] rounded-xl '>
            <img src='/images/feat-1.jpg' className='object-cover h-full w-full rounded-xl ' alt='' />

          </div>

          <h5 className='font-ageo text-center text-2xl font-semibold'>SECURITY</h5>

          <p className='text-center text-xl font-sora mt-2'>Keeping your payments safe with advanced AI security.</p>

        </div>
        <div className='rounded-xl w-[340px] h-[414px] px-3 py-3 bg-[#ffbe0b]'>

          <div className='w-[302px] mx-auto my-8 h-[170px] rounded-xl '>
            <img src='/images/feat-2.jpg' className='object-cover h-full w-full rounded-xl ' alt='' />

          </div>

          <h5 className='font-ageo text-center text-2xl font-semibold'>PAYMENT SOLUTIONS</h5>

          <p className='text-center text-xl font-sora mt-2'>Smart payment solutions for both physical and digital stores.</p>

        </div>
        <div className='rounded-xl w-[340px] h-[414px] px-3 py-3 bg-[#ffbe0b]'>

          <div className='w-[302px] mx-auto my-8 h-[170px] rounded-xl '>
            <img src='/images/feat-3.jpg' className='object-cover h-full w-full rounded-xl ' alt='' />

          </div>

          <h5 className='font-ageo text-center text-2xl font-semibold'>BILL PAYMENTS</h5>

          <p className='text-center text-xl font-sora mt-2'>Convenient and reliable bill payment solutions.</p>

        </div>

      </div>

    </div>
  )
}

export default OurprouctsFeat