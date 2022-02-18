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
    <div className="sm:p-16 smb:p-5 smb:py-16 dark:bg-darkBackground2 bg-white">
      <h2 className="text-center text-3xl smb:w-full text-black font-bold mb-10 dark:text-white">
        Tools & Technologies🪛
      </h2>
      <div className="grid smb:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10 justify-center justify-items-center justify-self-center content-center items-center">
        <div className="hover:animate-pulse">
          <Image alt="html" src={Html} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="css" src={Css} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="react" src={React} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="redux" src={Redux} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="next" src={Next} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="tailwind" src={Tailwind} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="figma" src={Figma} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="node" src={Node} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="firebase" src={Firebase} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="npm" src={Npm} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="python" src={Python} />
        </div>
        <div className="hover:animate-pulse">
          <Image alt="linux" src={Linux} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
