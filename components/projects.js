import React, { useLayoutEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import KlvinLogo from "../public/work/klvien/logo.black.svg";
import NanbanLogo from "../public/work/nanban/logo.svg";
import KlvienImage from "../public/platforms.jpg";
import NanbanScreen from "../public/work/nanban/frame.jpg";
import ReactLogo from "../public/technologyIcons/react.svg";
import ReduxLogo from "../public/technologyIcons/redux.svg";
import FirebaseLogo from "../public/technologyIcons/firebase.svg";
// import "@splidejs/splide/dist/css/splide-core.min.css";
import "@splidejs/splide/dist/css/splide.min.css";

const Projects = () => {
  return (
    <Splide
      className="bg-purpleLight"
      options={{
        arrows: false,
        autoplay: true,
        perPage: 1,
        rewind: true,
        gap: "1rem",
      }}
    >
      <SplideSlide>
        <div className="grid smb:grid-cols-1 sm:grid-cols-2 smb:p-5 sm:p-20 p-20 items-center dark:text-black2 self-center">
          <div>
            <h2 className="text-black2 font-bold smb:text-2xl sm:text-4xl text-4xl">
              Recent Work
            </h2>
            <div className="w-52 smb:w-40 sm:w-52 smb:mt-3 sm:mt-6">
              <Image src={NanbanLogo} />
            </div>
            <p className="w-full text-2xl sm:mt-11">
              A social media platform for schools and college students.
            </p>
            <div className="flex smb:mt-5 sm:mt-10 items-center">
              <div className="w-16">
                <Image width={100} src={ReactLogo} />
              </div>
              <div className="w-16 ml-5">
                <Image width={100} src={ReduxLogo} />
              </div>
              <div className="w-16 ml-5">
                <Image width={100} src={FirebaseLogo} />
              </div>
            </div>
          </div>
          <div className="smb:mt-5">
            <Image src={NanbanScreen} />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="grid smb:grid-cols-1 sm:grid-cols-2 smb:p-5 sm:p-20 p-20 items-center dark:text-black2 self-center">
          <div>
            <h2 className="text-black2 font-bold smb:text-2xl sm:text-4xl text-4xl">
              Recent Work
            </h2>
            <div className="w-52 smb:w-40 sm:w-52 smb:mt-3 sm:mt-6">
              <Image src={KlvinLogo} />
            </div>
            <p className="w-full text-2xl sm:mt-11">
              Complete School and College Mangement System.
            </p>
            <div className="flex smb:mt-5 sm:mt-10 items-center">
              <div className="w-16">
                <Image width={100} src={ReactLogo} />
              </div>
              <div className="w-16 ml-5">
                <Image width={100} src={ReduxLogo} />
              </div>
              <div className="w-16 ml-5">
                <Image width={100} src={FirebaseLogo} />
              </div>
            </div>
            <div className="mt-5">
              <a
                href="https://klvien.vercel.app/"
                target="_blank"
                className="border-2 p-2 rounded-xl border-purple hover:bg-purple hover:text-white duration-500 bg-white font-bold text-sm text-purple cursor-pointer"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="smb:mt-10">
            <Image src={KlvienImage} />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Projects;
