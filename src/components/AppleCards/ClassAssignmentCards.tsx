"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function ClassAssignmentCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Here Are Class Assignments.
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
              >See</Link>
              </span>{" "}
            </p>
            <br/>
            <Image
              src={img}
              alt="Pic"
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

const class01Msg = "Thrilled to share that I have just completed my first assignment! { Create About, Contact Us, and Service Page page In Service Create nested pages (app-development & website-development) Link them via Next Js Link Tag} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const class01Img = "https://i.pinimg.com/564x/44/b3/fd/44b3fd17e400ba363c34f357a64e552b.jpg";
const class01Link = "https://class01-assignment.vercel.app/";

const class02Msg = "Thrilled to share that I have just completed my Second assignment! {Create a component folder Inside component folder create 3 components Header Footer & Hero Styled them properly using custom css (Not Tailwind Css) Use all components in home about and contact us page} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const class02Img = "https://i.pinimg.com/564x/44/b3/fd/44b3fd17e400ba363c34f357a64e552b.jpg";
const class02Link = "https://class02-assignment.vercel.app/";

const class03Msg = "Thrilled to share that I have just completed my Third assignment! {- Create a minimal landing page Create header & footer components Create 2 to 3 sections in landing page (e.g: about us/portfolio) Styled all components and section properly using tailwind css} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const class03Img = "https://i.pinimg.com/564x/44/b3/fd/44b3fd17e400ba363c34f357a64e552b.jpg";
const class03Link = "https://class03-assignment-silk.vercel.app/";

const class04Msg = "Thrilled to share that I have just completed my Forth assignment! { Create a Presentation You have gained a strong understanding of Next.js now, it's time to create a presentation showcasing what you've learned. Your presentation should cover the following topics: What is the page.tsx file, and what is the layout.tsx file? What is the Link tag, why do we use this tag, and what is its purpose? What are components, and why do we use them? How can we apply CSS in Next.js?  What is Tailwind CSS, and what are the differences between Tailwind CSS and standard CSS?} Excited to keep learning, growing, and taking on new projects. Onward and upward! This Assignment is in the pdf so download it."
const class04Img = "https://i.pinimg.com/564x/44/b3/fd/44b3fd17e400ba363c34f357a64e552b.jpg";
const class04Link = "/Images/Next.pptx";

const class05Msg = "Thrilled to share that I have just completed my Fifth assignment! {Create a first section & header of given figma design using Next Js and tailwind Css} Excited to keep learning, growing, and taking on new projects. Onward and upward! This Assignment is in the pdf so download it."
const class05Img = "https://i.pinimg.com/564x/44/b3/fd/44b3fd17e400ba363c34f357a64e552b.jpg";
const class05Link = "https://class05-assignment-two.vercel.app/";


const data = [
  {
    category: "Class Assignment",
    title: "Assignment One.",
    src: "https://i.pinimg.com/564x/bc/2e/70/bc2e70ed0af10c581b7470ce89c57ebc.jpg",
    content: <DummyContent
    msg={class01Msg}
    links={class01Link}
    img={class01Img}
    />,
  },
  {
    category: "Class Assignment",
    title: "Assignment Two.",
    src: "https://i.pinimg.com/564x/ba/d3/f8/bad3f83f95e7f482daa891e4a6d4661f.jpg",
    content: <DummyContent
    msg={class02Msg}
    links={class02Link}
    img={class02Img}
    />,
  },
  {
    category: "Class Assignment",
    title: "Assignment Three.",
    src: "https://i.pinimg.com/564x/ee/82/71/ee827103cb5e141b7437fd20a057b110.jpg",
    content: <DummyContent
    msg={class03Msg}
    links={class03Link}
    img={class03Img}
    />,
  },
  {
    category: "Class Assignment",
    title: "Assignment Forth.",
    src: "https://i.pinimg.com/564x/cf/19/72/cf1972c7d3eee9f68c973df5c6dd3c75.jpg",
    content: <DummyContent
    msg={class04Msg}
    links={class04Link}
    img={class04Img}
    />,
  },
  {
    category: "Class Assignment",
    title: "Assignment Fifth.",
    src: "https://i.pinimg.com/564x/9f/c7/08/9fc70822a6122da91c0db15c0ff481b6.jpg",
    content: <DummyContent
    msg={class05Msg}
    links={class05Link}
    img={class05Img}
    />,
  }
];
