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
        <div className="grid grid-cols-2 p-20 items-center self-center">
          <div>
            <h2 className="text-black2 font-bold text-4xl">Recent Work</h2>
            <div className="w-52 mt-6">
              <Image src={NanbanLogo} />
            </div>
            <p className="w-96 text-2xl mt-11">
              A social media platform for schools and college students.
            </p>
            <div className="flex mt-10 items-center">
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
          <div>
            <Image src={NanbanScreen} />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="grid grid-cols-2 p-20 items-center self-center">
          <div>
            <h2 className="text-black2 font-bold text-4xl">Recent Work</h2>
            <div className="w-52 mt-6">
              <Image src={KlvinLogo} />
            </div>
            <p className="w-96 text-2xl mt-11">
              Complete School and College Mangement System.
            </p>
            <div className="flex mt-10 items-center">
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
          <div className="flex">
            <Image src={KlvienImage} />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Projects;
