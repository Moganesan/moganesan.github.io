import Next from "../public/technologyIcons/next.svg";
import React from "../public/technologyIcons/react.svg";
import Firebase from "../public/technologyIcons/firebase.svg";
import Node from "../public/technologyIcons/node.svg";
import Npm from "../public/technologyIcons/npm.svg";
import Linux from "../public/technologyIcons/linux.svg";
import Redux from "../public/technologyIcons/redux.svg";
import Python from "../public/technologyIcons/python.svg";
import Figma from "../public/technologyIcons/figma.svg";
import Css from "../public/technologyIcons/css.svg";
import Html from "../public/technologyIcons/html.svg";
import Tailwind from "../public/technologyIcons/tailwind.svg";
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="p-16 dark:bg-darkBackground2 bg-white">
      <h2 className="text-center text-3xl text-black font-bold mb-10 dark:text-white">
        Technologies i work with🪛
      </h2>
      <div className="grid smb:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10 justify-center justify-items-center justify-self-center content-center items-center">
        <div className="hover:animate-pulse">
          <Image src={Html} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Css} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={React} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Redux} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Next} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Tailwind} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Figma} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Node} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Firebase} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Npm} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Python} />
        </div>
        <div className="hover:animate-pulse">
          <Image src={Linux} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
