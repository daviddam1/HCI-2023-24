import React from 'react';
import Link from 'next/link';
import sitemap from '@/app/enum/sitemap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className='bg-[#2A3C4B] pt-1'>
      <div className='flex flex-end bg-[#F2E863] h-0.5 mx-20 rounded-xl'></div>
      <div className='flex flex-col md:flex-row p-4 md:p-20 text-white'>
          <div className='w-full md:w-1/3'>
              <Link href={"/"}>
                <div className='flex items-center scale-75 md:scale-100'>
                  <Image src="/assets/icons/traveler.png" width={78} height={68} alt="logo" />
                  <span className='font-semibold text-[20px] md:text-[24px] text-[#F2E863] pt-3'>Traveler</span>
                </div>
              </Link>
              <p className='pt-6 md:pt-8 px-10 md:px-0 text-sm md:text-base italic'>
                &quot;At Traveler, we&apos;re your trusted companions in navigating the globe&apos;s hidden treasures. With our extensive travel guides and personal insights, we&apos;re dedicated to helping you uncover and explore the world&apos;s most captivating destinations, from remote corners to vibrant metropolises, revealing the beauty and diversity of our planet.&quot;
              </p>
          </div>
          <div className='flex justify-around'>
              <div className='w-full flex flex-col items-start text-[12px] md:text-[16px] px-12 ml-3 md:ml-40 lg:ml-64'>
                <h2 className='pt-8 pb-5 text-[#F2E863] font-semibold text-[14px] md:text-[18px]'>Spaces</h2>
                {sitemap.map((item) => (
                  <div className="pt-3" key={item.id}>
                    <Link className="font-normal hover:text-[#F2E863]" href={item.link}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <div className='w-full flex flex-col items-start text-[12px] md:text-[16px] px-12'>
                <h2 className='pt-8 pb-5 text-[#F2E863] font-semibold text-[14px] md:text-[18px]'>My Account</h2>
                <p className='font-normal pt-3 text-left hover:text-[#F2E863]'>Profile</p>
                <p className='font-normal pt-3 text-left hover:text-[#F2E863]'>Settings</p>
              </div>
          </div>
      </div>
      <div className='flex justify-center pb-4 md:pb-6 mt-4 md:pt-2'>
        <FontAwesomeIcon className='px-3 md:px-10 hover:scale-110' icon={faFacebookSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-3 md:px-10 hover:scale-110' icon={faInstagramSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-3 md:px-10 hover:scale-110' icon={faTwitterSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-3 md:px-10 hover:scale-110' icon={faDiscord} size='2x' color='#F2E863' />
      </div>
      <div className='flex justify-center font-thin text-[10px] md:text-[12px] italic text-gray-300'>
        Copyright @ 2023 FESB. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
