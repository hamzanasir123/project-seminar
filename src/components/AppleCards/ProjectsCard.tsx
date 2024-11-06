"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Here Are Some Projects.
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

const portfolioMsg = "I'm excited to share the initial version of my project portfolio, showcasing some of the projects I have been working on. This is just the beginning; I have many improvements and refinements planned to take it to the next level! As I continue to build my skills, I will be adding more projects, enhancing the design, and refining the functionality to create a portfolio that truly reflects my growth and expertise.Stay tuned for updates, and thank you for joining me on this journey!"
const portfolioImg = "https://i.pinimg.com/564x/3e/1a/48/3e1a489b829f6d154492420b49ec6538.jpg";
const portfolioLink = "https://hamzanasir123portfolio.vercel.app/";

const coloursMsg = "Color Chooser is an intuitive tool designed to help users effortlessly pick and explore colors. With a sleek, user-friendly interface, it allows users to choose a color from a spectrum, displays the corresponding hex code, and offers a one-click option to copy the hex code for easy use in design, coding, or creative projects. This tool is ideal for designers, developers, and anyone looking for precise color selection with quick access to hex values."
const coloursImg = "https://i.pinimg.com/564x/89/97/11/899711e4ed8292d371e78ebadcf6619a.jpg";
const coloursLink = "https://colours-rosy.vercel.app/";

const psdGenMsg = "The Password Generator is a tool that helps users create secure passwords tailored to their needs. Users can specify a password length between 8 and 100 characters, with options to include numbers and special characters for enhanced security. Designed for flexibility and security, this tool ensures that users can create strong, customized passwords that meet various complexity requirements. Ideal for anyone needing robust password protection for accounts, devices, or sensitive information."
const psdGenImg = "https://i.pinimg.com/736x/ac/bf/ab/acbfab20512d6153ead680352a1ac86a.jpg";
const psdGenLink = "https://possword-generator.vercel.app/";

const currConMsg = "Currency Converter is a web-based tool that allows users to quickly and accurately convert between various global currencies. With an intuitive interface, users can select their desired currencies and input the amount to be converted. The tool then fetches real-time exchange rates to provide instant, reliable conversions. This project is ideal for anyone who travels, shops internationally, or needs to track currency values for financial planning. Built with responsiveness and ease of use in mind, it’s accessible on both desktop and mobile devices, making currency conversion a seamless experience on the go."
const currConImg = "https://i.pinimg.com/564x/6c/7e/20/6c7e203c5a41f0bced4718c257762e66.jpg";
const currConLink = "https://currency-converter-seven-self.vercel.app/";

const eCommMsg = "I am excited to share the initial version of my eCommerce UI project! This project is focused on creating a smooth, user-friendly shopping interface that provides a seamless browsing and purchasing experience. Currently, it features a basic layout for browsing products, a cart section, and navigation elements. This is just the beginning! I plan to enhance the UI with more features, such as improved filtering options, responsive design for mobile devices, and an optimized checkout flow. There’s plenty of room for further improvements, and I look forward to making it more dynamic and visually engaging as I continue developing it."
const eCommImg = "https://i.pinimg.com/564x/da/2b/89/da2b892ce1977ad6bcda33d273b96012.jpg";
const eCommLink = "https://manzeil-h78zaykcn-hamzanasir123s-projects.vercel.app/";

const rpsMsg = "This project brings the classic game of Rock Paper Scissors to life with an interactive and engaging user interface. Built using HTML, CSS, typescript and javascript, the game allows players to compete against the computer in a battle of quick decisions and strategic moves."
const rpsImg = "https://i.pinimg.com/564x/41/a9/8f/41a98fb3cef655eb56658464a4112f15.jpg";
const rpsLink = "https://rock-paper-scissor-five-rust.vercel.app/";

const tttMsg = "Tic Tac Toe Game : Challenge your friends or take on the computer in this classic Tic Tac Toe game! Designed with a sleek interface, this project provides a smooth and interactive gameplay experience for all ages. Players can enjoy simple X and O style gameplay with intuitive controls and a quick restart option for endless rounds of fun. Perfect for both casual play and a great way to enhance your programming skills by implementing game logic and an engaging user interface. Ready to play? Test your skills and try to get three in a row!"
const tttImg = "https://i.pinimg.com/236x/bc/ac/96/bcac969a26d64c5c293685b9d2cb0f9f.jpg";
const tttLink = "https://tic-tac-toe-six-lovat-56.vercel.app/";


const data = [
  {
    category: "Portfolio",
    title: "Its Just Initial.",
    src: "https://i.pinimg.com/736x/33/4d/61/334d6130a50badf19a72fe4144cab412.jpg",
    content: <DummyContent
    msg={portfolioMsg}
    links={portfolioLink}
    img={portfolioImg}
    />,
  },
  {
    category: "Colours",
    title: "You can choose and copy different colours.",
    src: "https://i.pinimg.com/736x/ad/7f/b2/ad7fb2d2d22b04606eeaee65fe065a17.jpg",
    content: <DummyContent
    msg={coloursMsg}
    links={coloursLink}
    img={coloursImg}
    />
  },
  {
    category: "Possword Generator",
    title: "You can create Possword with this.",
    src: "https://i.pinimg.com/564x/a6/59/a3/a659a35a870f8cc0ad564780024711e8.jpg",
    content: <DummyContent
    msg={psdGenMsg}
    links={psdGenLink}
    img={psdGenImg}
    />
  },

  {
    category: "Currency Converter",
    title: "You can convert currency with this.",
    src: "https://i.pinimg.com/564x/08/87/b8/0887b8d1c41ef2367cf8f3a076916153.jpg",
    content: <DummyContent
    msg={currConMsg}
    links={currConLink}
    img={currConImg}
    />
  },
  {
    category: "Ecommerce UI",
    title: "A basic UI of ecommerce.",
    src: "https://i.pinimg.com/564x/f2/ad/0c/f2ad0c9d766efde069260ef0ee5dede3.jpg",
    content: <DummyContent
    msg={eCommMsg}
    links={eCommLink}
    img={eCommImg}
    />
  },
  {
    category: "Game",
    title: "Rock-Paper-Scissor",
    src: "https://i.pinimg.com/564x/ee/3e/07/ee3e0791355af373b595eed5ed887110.jpg",
    content: <DummyContent
    msg={rpsMsg}
    links={rpsLink}
    img={rpsImg}
    />
  },
  {
    category: "Game",
    title: "Tic-Tac-Toe",
    src: "https://i.pinimg.com/736x/47/b8/8f/47b88f57dd24d048e3f0f9eb5cdcd52d.jpg",
    content: <DummyContent
    msg={tttMsg}
    links={tttLink}
    img={tttImg}
    />
  }
];
