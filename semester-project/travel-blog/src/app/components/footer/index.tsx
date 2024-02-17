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
    <section className='bg-[#2A3C4B] pt-10 md:p-10 text-white'>
      <div className='flex flex-end bg-[#F2E863] h-0.5 mx-10 rounded-xl'></div>
      <div className='flex flex-col'>
          <div className='mx-16 sm:mx-32 lg:mx-44'>
            <h2 className='text-[#F2E863] font-semibold text-[16px] lg:text-[18px] my-8 ml-5'>
              <Link className='flex flex-row items-center' href={'/'}>
                <Image className='mr-2 mb-2' src="/assets/icons/traveler.png" width={50} height={30} alt="logo" />
                Traveler
              </Link>
            </h2>
            <p className='text-sm lg:text-base text-justify'>
              &quot;Your trusted companion for uncovering the world&apos;s hidden treasures, one adventure at a time. At Traveler, we are dedicated to sharing captivating travel stories, insider tips, and inspiring destinations. From remote villages to bustling cities, we explore the globe&apos;s best-kept secrets, celebrating diverse cultures and breathtaking landscapes. Join our global community of fellow explorers as we embark on exhilarating journeys, forging connections, and creating unforgettable memories together. Let&apos;s wanderlust together and discover the beauty of our world, one hidden gem at a time.&quot;
            </p>
          </div>
          <div className='flex flex-row justify-center'>
              <div className='px-6 md:px-24 text-sm lg:text-base'>
                <h2 className='pt-10 pb-3 text-[#F2E863] font-semibold text-[16px] lg:text-[20px]'>Spaces</h2>
                {sitemap.map((item) => (
                  <div className="pt-3" key={item.id}>
                    <Link className="font-normal hover:text-[#F2E863]" href={item.link}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <div className='px-6 md:px-24 text-sm lg:text-base'>
                <h2 className='pt-10 pb-3 text-[#F2E863] font-semibold text-[16px] lg:text-[20px]'>My Account</h2>
                <p className='font-normal pt-3 text-left hover:text-[#F2E863]'>Profile</p>
                <p className='font-normal pt-3 text-left hover:text-[#F2E863]'>Settings</p>
              </div>
          </div>
      </div>
      <div className='flex justify-center pb-4 lg:pb-6 mt-10'>
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
