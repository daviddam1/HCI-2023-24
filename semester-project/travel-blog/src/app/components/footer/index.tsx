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
    <section className='bg-[#2A3C4B] pt-10 md:p-12'>
      <div className='flex flex-end bg-[#F2E863] h-0.5 mx-10 rounded-xl'></div>
      <div className='flex flex-col'>
        <div className='w-full flex flex-row flex-wrap sm:flex-nowrap pl-16 justify-between'>
          <div className='w-full'>
            <h2 className='pt-8 pb-5 mx-10 px-10 text-[#F2E863] font-semibold text-[16px] lg:text-[18px]'>
              <Link className='flex flex-row' href={'/'}>
                <Image className='mr-2' src="/assets/icons/traveler.png" width={22} height={10} alt="logo" />
                Traveler
              </Link>
            </h2>
            <p className='pt-6 lg:pt-8 hidden sm:block px-10 mx-10 lg:px-0 text-sm lg:text-base'>
              &quot;At Traveler, we&apos;re your trusted companions in navigating the globe&apos;s hidden treasures. With our extensive travel guides and personal insights, we&apos;re dedicated to helping you uncover and explore the world&apos;s most captivating destinations.&quot;
            </p>
          </div>
          <div className='md:pl-40 pl-20 w-full'>
            <h2 className='pt-8 pb-5 text-[#F2E863] font-semibold text-[16px] lg:text-[18px]'>Spaces</h2>
            {sitemap.map((item) => (
              <div className="pt-3" key={item.id}>
                <Link className="font-normal hover:text-[#F2E863]" href={item.link}>{item.name}</Link>
              </div>
            ))}
          </div>
          <div className='pl-20 w-full'>
            <h2 className='pt-8 pb-5 text-[#F2E863] font-semibold text-[16px] lg:text-[18px]'>My Account</h2>
            <p className='font-normal pt-3 text-left hover:text-[#F2E863]'>Profile</p>
            <p className='font-normal pt-3 text-left hover:text-[#F2E863]'>Settings</p>
          </div>
        </div>

      </div>


      <div className='flex justify-center pb-4 lg:pb-6 mt-4 lg:pt-2'>
        <FontAwesomeIcon className='px-3 lg:px-10 hover:scale-110' icon={faFacebookSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-3 lg:px-10 hover:scale-110' icon={faInstagramSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-3 lg:px-10 hover:scale-110' icon={faTwitterSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-3 lg:px-10 hover:scale-110' icon={faDiscord} size='2x' color='#F2E863' />
      </div>
      <div className='flex justify-center font-thin text-[10px] lg:text-[12px] italic text-gray-300'>
        Copyright @ 2023 FESB. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
