"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function MilestoneCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Here Are Milestone Assignment & Projects.
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

const milestone01Msg = "Thrilled to share that I have just completed my first milestone! {Develop a simple webpage that displays a personalized HELLO WORLD message with basic styling.} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const milestone01Img = "https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg";
const milestone01Link = "https://milestone01-black.vercel.app/";

const milestone02AssignmentWithCSSMsg = "Thrilled to share that I have just completed my Second milestone Assignment With Css! {Build a simple multi-page website using react components, Apply custom CSS to style the website, ensuring responsiveness.} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const milestone02AssignmentWithCSSImg = "https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg";
const milestone02AssignmentWithCSSLink = "https://milestone02-assignment-with-css.vercel.app/";

const milestone02AssignmentWithTailwindMsg = "Thrilled to share that I have just completed my Second milestone Assignment With Tailwind!{Build a simple multi-page website using react components, Apply Tailwind CSS to style the website, ensuring responsiveness.} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const milestone02AssignmentWithTailwindImg = "https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg";
const milestone02AssignmentWithTailwindLink = "https://milestone02-assignment-with-tailwind.vercel.app/";

const milestone02ProjectWithCSSMsg = "Thrilled to share that I have just completed my Second milestone Project With Css! {Design and develop a personal portfolio website with atleast three pages (HOME , ABOUT CONTACT), Use Custom CSS for layout and styling}. Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const milestone02ProjectWithCSSImg = "https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg";
const milestone02ProjectWithCSSLink = "https://milestone02-project-with-css.vercel.app/";

const milestone02ProjectWithTailwindMsg = "Thrilled to share that I have just completed my Second milestone Project With Tailwind! {Design and develop a personal portfolio website with atleast three pages (HOME , ABOUT CONTACT), Use Tailwind CSS for layout and styling}. Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const milestone02ProjectWithTailwindImg = "https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg";
const milestone02ProjectWithTailwindLink = "https://milestone02-vert.vercel.app/";

const milestone03WithTailwindMsg = "Thrilled to share that I have just completed my Third milestone Project With Tailwind! {Develop a basic eCommerce site featuring products, products details and a shopping cart, Integrate basic API routes for handling products data.} Excited to keep learning, growing, and taking on new projects. Onward and upward!"
const milestone03WithTailwindImg = "https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg";
const milestone03WithTailwindLink = "https://milestone03-git-master-hamzanasir123s-projects.vercel.app/";

const data = [
  {
    category: "Nextjs Milestone",
    title: "Milestone One.",
    src: "https://i.pinimg.com/736x/c8/34/7a/c8347a3f2dac4b232373865b792a59b1.jpg",
    content: <DummyContent
    msg={milestone01Msg}
    links={milestone01Link}
    img={milestone01Img}
    />,
  },
  {
    category: "Nextjs Milestone",
    title: "Milestone 2 Assignment With Css.",
    src: "https://i.pinimg.com/736x/81/8b/92/818b92838bedc82f69971fd8fc86a591.jpg",
    content: <DummyContent
    msg={milestone02AssignmentWithCSSMsg}
    links={milestone02AssignmentWithCSSLink}
    img={milestone02AssignmentWithCSSImg}
    />,
  },
  {
    category: "Nextjs Milestone",
    title: "Milestone 2 Assignment With Tailwind.",
    src: "https://i.pinimg.com/736x/eb/06/11/eb061150fd8eca35f7f9c811d06771ff.jpg",
    content: <DummyContent
    msg={milestone02AssignmentWithTailwindMsg}
    links={milestone02AssignmentWithTailwindLink}
    img={milestone02AssignmentWithTailwindImg}
    />,
  },
  {
    category: "Nextjs Milestone",
    title: "Milestone 2 Project With Css.",
    src: "https://i.pinimg.com/736x/1c/1d/ad/1c1dad8420de070720f85e31c23d1897.jpg",
    content: <DummyContent
    msg={milestone02ProjectWithCSSMsg}
    links={milestone02ProjectWithCSSLink}
    img={milestone02ProjectWithCSSImg}
    />,
  },
  {
    category: "Nextjs Milestone",
    title: "Milestone 2 Project With Tailwind.",
    src: "https://i.pinimg.com/736x/2c/4d/66/2c4d6640216f42378e81f30548ff92ed.jpg",
    content: <DummyContent
    msg={milestone02ProjectWithTailwindMsg}
    links={milestone02ProjectWithTailwindLink}
    img={milestone02ProjectWithTailwindImg}
    />,
  },
  {
    category: "Nextjs Milestone",
    title: "Milestone 3 Project With Tailwind.",
    src: "https://i.pinimg.com/736x/ad/0b/43/ad0b4376771692c6213d6dbd7d3ccaa8.jpg",
    content: <DummyContent
    msg={milestone03WithTailwindMsg}
    links={milestone03WithTailwindLink}
    img={milestone03WithTailwindImg}
    />,
  }
];
