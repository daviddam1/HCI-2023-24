import { Header } from '@/app/components/header'
import Footer from '@/app/components/footer'
import React from 'react'

const About = () => {
  return (
      <section className='bg-[#2A3C4B]'>
        <Header />
        <div className='p-20'>
            <p className='text-[#F2E863] font-bold text-3xl'>About Us</p>
            <div className='flex flex-end bg-[#F2E863] h-2 rounded-xl'></div>
            <br></br>
            <p className='text-white pt-8 text-xl'>Welcome to <strong className='text-[#F2E863]'>Traveler</strong>, your passport to a world of exploration and discovery! Founded by David Damjanović and Ivan Lovrić, our blog is a celebration of diverse cultures, breathtaking landscapes, and the joy of uncovering hidden gems around the globe.</p>
            <div>
                <br></br>
                <p className='text-[#F2E863] font-semibold text-2xl'>Meet David:</p>
                <p className='text-white text-xl pt-3 pl-5 pr-20'>David Damjanović, a dedicated computer science student and avid explorer, merges his passion for technology with his love for travel. From coding challenges to conquering new horizons, David brings a unique perspective to our travel blog. His analytical mind navigates the intricacies of both the digital realm and the diverse landscapes he encounters, providing you with a tech-savvy take on the world's wonders.</p>
            </div>
            <div>
                <br></br>
                <p className='text-[#F2E863] font-semibold text-2xl'>Meet Ivan:</p>
                <p className='text-white text-xl pt-3 pl-5 pr-20'>Ivan Lovrić, our co-founder, is a passionate advocate for off-the-beaten-path exploration. Armed with a camera and a keen eye for detail, Ivan captures the essence of each destination, from the tranquil landscapes of the Swiss Alps to the vibrant markets of Marrakech. His goal is to inspire others to venture beyond the ordinary and embrace the extraordinary diversity our world has to offer.</p>
            </div>
        </div>
        <div className='flex flex-end bg-[#F2E863] h-2 mr-20 ml-20 rounded-xl'></div>
        <Footer />
      </section>
  )
}

export default About