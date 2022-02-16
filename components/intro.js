import React, { useEffect } from "react";
import Image from "next/image";
import BrushIcon from "../public/icons/brush.svg";
import CodeIcon from "../public/icons/code.svg";
import YoutubeIcon from "../public/icons/youtube.svg";
import Hero from "../components/heroContainer";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center md:p-10 p-24 text-white bg-purple smb:p-9">
      <p className="w-2/3 text-2xl text-center smb:text-xl smb:w-full sm:w-2/3 md:w-1/2">
        My name is Moganesan im a full-stack developer, i worked varius tech
        projects. and know how to build complex applications with suitable
        technologies
      </p>
      <div className="grid smb:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 text-center smb:m-10 mt-20">
        <div className="container bg-white p-10 rounded-lg shadow-2xl duration-200 hover:scale-105">
          <Image src={BrushIcon} />
          <h1 className="text-black font-bold text-3xl mt-5">Designer</h1>
          <p className="text-black mt-10">
            My goal is to create attractive web and mobile designs with the help
            of latest tricks and tools and also I create user frinedly UI
            Elements
          </p>
          <p className="text-purple mt-5 font-bold">Files i worked with:</p>
          <ul className="text-black mt-2">
            <li>Svg</li>
            <li>Png</li>
            <li>Jpeg</li>
            <li>Giff</li>
          </ul>
          <p className="text-purple mt-5 font-bold">Tools & Technologies:</p>
          <ul className="text-black mt-2">
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe XD</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="container smb:scale-100 md:hover:scale-105 bg-white p-10 rounded-lg shadow-2xl scale-110  duration-200 hover:scale-125">
          <Image src={CodeIcon} />
          <h1 className="text-black font-bold text-3xl mt-5">Developer</h1>
          <p className="text-black mt-10">
            I can develope any kind of web and mobile applications with trending
            technologies.
          </p>
          <p className="text-purple mt-5 font-bold">Programming Languages:</p>
          <ul className="text-black mt-2">
            <li>C</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
          <p className="text-purple mt-2 font-bold">Tools&Technologies:</p>
          <ul className="text-black mt-2">
            <li>React/Native</li>
            <li>Nodejs/Express</li>
            <li>Firebase</li>
            <li>Nextjs</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="container bg-white p-10 rounded-lg shadow-2xl  duration-200 hover:scale-105">
          <Image src={YoutubeIcon} />
          <h1 className="text-black font-bold text-3xl mt-5">
            Content Creator
          </h1>
          <p className="text-black mt-10">
            I started my youtube channel at Apr 8,2017, I love to do tech &
            programming videos on youtube, currently i have 1300 SUBSCRIBERS.
          </p>
          <p className="text-purple mt-10 font-bold">Subscriber:</p>
          <ul className="text-black mt-2">
            <li>1300</li>
          </ul>
          <p className="text-purple mt-5 font-bold">Viewers:</p>
          <ul className="text-black mt-2">
            <li>1,75,000</li>
          </ul>
          <p className="text-purple mt-5 font-bold">Courses:</p>
          <ul className="text-black mt-2">
            <li>Complete JavaScript Mastery, 8 hours Course</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
