"use client"
import React from "react";
import { Header } from "@/app/components/header";
import Footer from "@/app/components/footer";
import stories from "@/app/enum/travelExperienceData";
import Link from "next/link";
import Image from "next/image";

const Story = ({ params }: { params: { postId: string } }) => {
  const { postId } = params //Ovdje storyId ostane undefined
  console.log(postId)

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
      <div className="text-white font-medium text-base p-10" key={story.id}>
        <p className="text-[#F2E863] font-bold text-2xl">{story.title}</p>
        <div className="flex justify-start font-medium text-base text-white">
          <Image src={story.img} alt={story.author} height='80' width='80' />
          <p><span className="text-[#F2E863]">Author: </span>{story.author}</p>
        </div>
        <p>{story.text}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Story;