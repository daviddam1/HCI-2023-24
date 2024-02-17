"use client"
import React from "react";
import { Header } from "@/app/components/header";
import Footer from "@/app/components/footer";
import stories from "@/app/enum/travelExperienceData";
import Link from "next/link";
import Image from "next/image";

const Story = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  const story = stories.find((story) => String(story.id) === postId);

  if (!story) {
    return (
      <div className="flex flex-col items-center justify-center p-20 py-72 md:p-80 bg-[#2A3C4B]">
        <h1 className="text-3xl text-white font-bold p-10">Story not found!</h1>
        <Link href="/pages/travelStoriesExperiences">
          <button className="bg-[#F2E863]  font-medium cursor-pointer rounded-xl p-2 hover:scale-110">&larr; Back to Travel Experience</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#2A3C4B]">
      <Header />
      <div className="text-white font-medium text-base text-justify p-12 sm:px-20 md:px-40 lg:px-64" key={story.id}>
        <p className="text-[#F2E863] font-bold text-lg md:text-3xl">{story.title}</p>
        <div className="flex justify-start items-center font-medium text-xs md:text-lg text-white p-5 md:p-7">
          <Image src={story.img} alt={story.author} height='70' width='70' className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] border-2 border-[#F2E863] rounded-xl" />
          <p><span className="text-[#F2E863] pl-2">Author: </span>{story.author}</p>
        </div>
        <p className="text-xs md:text-lg font-medium">{story.text}</p>
        <Link href="/pages/travelStoriesExperiences">
          <button className="text-[#081C31] text-[12px] md:text-[16px] font-bold cursor-pointer mt-8 bg-[#F2E863] my-6 p-1 md:p-2 w-20 md:w-36 rounded-xl hover:scale-110">&larr; Back</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Story;