import { Header } from '@/app/components/header'
import Footer from '@/app/components/footer'
import React from 'react'

const About = () => {
  return (
    <section className='bg-[#2A3C4B]'>
      <Header />
      <div className='p-10 md:p-20'>
        <p className='text-white font-bold text-xl md:text-3xl'>About Us</p>
        <div className='flex flex-end bg-[#F2E863] h-0.5 md:h-1.5 rounded-xl'></div>
        <p className='text-white pt-5 md:pt-10 font-semibold text-[12px] md:text-[20px]'>Welcome to <strong className='text-[#F2E863]'>Traveler</strong>, your passport to a world of exploration and discovery! Founded by David Damjanović and Ivan Lovrić, our blog is a celebration of diverse cultures, breathtaking landscapes, and the joy of uncovering hidden gems around the globe.</p>
        <div>
          <p className='text-[#F2E863] font-bold text-sm md:text-2xl pt-5'>Meet David:</p>
          <p className='text-white text-xs md:text-xl font-medium pt-3 pl-4 pr-4 md:pr-20'><span className='font-semibold'>David Damjanović</span>, a dedicated computer science student and avid explorer, merges his passion for technology with his love for travel. From coding challenges to conquering new horizons, David brings a unique perspective to our travel blog. His analytical mind navigates the intricacies of both the digital realm and the diverse landscapes he encounters, providing you with a tech-savvy take on the world&apos;s wonders.</p>
        </div>
        <div>
          <p className='text-[#F2E863] font-bold text-sm md:text-2xl pt-5'>Meet Ivan:</p>
          <p className='text-white text-xs md:text-xl font-medium pt-3 pl-4 pr-4 md:pr-20'><span className='font-semibold'>Ivan Lovrić</span>, our co-founder, is a passionate advocate for off-the-beaten-path exploration. Armed with a camera and a keen eye for detail, Ivan captures the essence of each destination, from the tranquil landscapes of the Swiss Alps to the vibrant markets of Marrakech. His goal is to inspire others to venture beyond the ordinary and embrace the extraordinary diversity our world has to offer.</p>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About;