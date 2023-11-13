import React from 'react'

const Feed = () => {
  return (
    <section className='bg-[#F2E863]'>
      <div className='p-20'>
        <div className='flex flex-row-reverse justify-between pb-20'>
          <div>
            <div className='bg-[#2A3C4B] h-4 w-96 mb-4 rounded-xl'></div>
            <p className='text-[48px] font-semibold max-sm:text-[22px] text-[#2A3C4B]'>The <span className='text-white'>Experience<br /></span>by Our Explorers</p>
          </div>
          <div className='flex flex-col-reverse'>
            <p className='font-semibold pb-3 text-[#2A3C4B]'>Some interesting impressions from people that<br /> traveled and explored with us</p>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-end bg-[#2A3C4B] h-4 w-96 mt-20 rounded-xl'></div>
        </div>
      </div>
    </section>
  )
}

export default Feed