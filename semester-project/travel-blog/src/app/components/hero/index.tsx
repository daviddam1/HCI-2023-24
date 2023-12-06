import React from 'react'
import heroItems from '@/app/enum/hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className='bg-[#2A3C4B]'>
      <div className='p-4 md:p-20'>
        <div className='flex flex-col md:flex-row justify-between pb-4 md:pb-20'>
          <div className='md:w-1/2'>
            <div className='bg-[#F2E863] h-4 md:h-auto w-full md:w-96 mb-4 rounded-xl'></div>
            <p className='text-[24px] md:text-[48px] font-semibold max-sm:text-[22px]'>
              Our Top Popular<br /><span className='text-[#F2E863]'>Destinations</span>
            </p>
          </div>
          <div className='flex flex-col-reverse md:w-1/2'>
            <p className='font-semibold pb-3'>
              The following are the selected tourist spots that<br />are most in demand by our explorers
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {heroItems.map(item => (
            <div key={item.id} className='px-2 w-full md:w-1/2 lg:w-1/3'>
              <div className='flex py-2'>
                <img className="rounded-xl w-full" alt={item.name} height={328} src={item.img}></img>
              </div>
              <div>
                <p className='font-bold mt-3 text-[18px]'>{item.name}</p>
                <div className='py-2'>
                  <div className='flex items-center'>
                    <img width={55} height={20} src={item.loc_img} alt={item.location}></img>
                    <p className='font-regular text-[14px]'>{item.location}</p>
                  </div>
                  <p className='pt-4 md:pt-8 font-medium'>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center max-lg:hidden'>
          <div className='bg-[#F2E863] mt-6 md:mt-12 mx-2 p-2 rounded-xl w-10 h-10 flex justify-center items-center cursor-pointer'>
            <FontAwesomeIcon className='' icon={faChevronLeft} color='#081C31' size='2x' />
          </div>
          <div className='bg-[#F2E863] mt-6 md:mt-12 mx-2 p-2 rounded-xl w-10 h-10 flex justify-center items-center cursor-pointer'>
            <FontAwesomeIcon className='' icon={faChevronRight} color='#081C31' size='2x' />
          </div>
        </div>
        <div className='flex flex-row-reverse'>
          <div className='flex flex-end bg-[#F2E863] h-4 w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
