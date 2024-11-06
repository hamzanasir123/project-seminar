"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function HackathonCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Here a hackathon.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  msg: string;
  links: string;
  img: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ msg, links, img })=> {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-white dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {msg}
              <br/>
              <br/>
              <Link href={links} 
              target="_blank"
              className="bg-slate-400 p-1 rounded-md px-5 text-white"
              >Create</Link>
              </span>{" "}
            </p>
            <br/>
            <Image
              src={img}
              alt="Resume Builder"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const resumeMsg = "Our Resume Builder is a user-friendly tool designed to help job seekers create professional polished resumes effortlessly. With a clean and intuitive form-based setup, you can input your personal information, experience, skills, and achievements, and see your resume crafted in real-time. Customize each section, and format the design to suit your industry."
const resumeImg = "https://i.pinimg.com/564x/3e/1a/48/3e1a489b829f6d154492420b49ec6538.jpg";
const resumeLink = "https://hackathon-1-beta-drab.vercel.app/";


const data = [
  {
    category: "Resume Builder",
    title: "You can build resume with this.",
    src: "/Images/resume.png",
    content: <DummyContent
    msg={resumeMsg}
    links={resumeLink}
    img={resumeImg}
    />,
  }
];
