import Footer from '@/app/components/footer';
import { Header } from '@/app/components/header';
import React from 'react';
import stories from '@/app/enum/travelExperienceData';
import photos from '@/app/enum/travelExperiencePhotos';
import Link from 'next/link';
import Image from 'next/image';

const StoriesExperiences = () => {
  return (
    <div className='bg-[#2A3C4B] text-white'>
      <Header />
      <div className='flex flex-col md:flex-row md:justify-around p-10 md:p-20'>
            <div className='text-xl md:text-3xl font-bold'>
                  <p>Travel Stories</p>
                  <div className='bg-[#F2E863] w-full h-0.5 md:h-1.5 rounded-xl'></div>
                  <div className='flex flex-col pt-5'>
                      {stories.map(story => (
                          <div className='text-sm md:text-base p-2' key={story.id}>
                              <Link href={`travelStoriesExperiences/${story.id}`}>
                              <p className='text-[#F2E863]'>{story.title}</p>
                              </Link>
                              <p>by {story.author}</p>
                          </div>
                      ))}
                  </div>
            </div>
            <div className='text-xl md:text-3xl font-bold pt-10 md:pt-0'>
                  <p>Travel Photos</p>
                  <div className='bg-[#F2E863] w-full h-0.5 md:h-1.5 rounded-xl'></div>
                  <div className='grid grid-cols-2 pt-5'>
                      {photos.map(photo => (
                          <div className='p-2' key={photo.id}>
                              <Image src={photo.src} alt={photo.name} height='150' width='275' className='border-[#F2E863] border-2 rounded-xl w-[175px] h-[90px] sm:w-[275px] sm:h-[150px]'/>
                          </div>
                      ))}
                  </div>
            </div>
      </div>
      <Footer />
    </div>
  )
}

export default StoriesExperiences;