import Image from "next/image";
import ResponsiveDesign from "../public/services/responsiveWebdesign.svg";
import AppDevelopment from "../public/services/appdevelopment.svg";
import BackendDevelopment from "../public/services/backend.svg";
import FrontendDevelopment from "../public/services/frontend.svg";
import React from "../public/technologyIcons/react.svg";
import Tailwind from "../public/technologyIcons/tailwind.svg";
import Github from "../public/technologyIcons/github.svg";
import CSS from "../public/technologyIcons/css.svg";
import Redux from "../public/technologyIcons/redux.svg";
import Figma from "../public/technologyIcons/figma.svg";
import Firebase from "../public/technologyIcons/firebase.svg";
import Node from "../public/technologyIcons/node.svg";
import Linux from "../public/technologyIcons/linux.svg";
import Python from "../public/technologyIcons/python.svg";

import Head from "next/head";

const About = () => {
  return (
    <div className="sm:p-10 md:p-0 dark:bg-darkBackground2">
      <Head>
        <title>About</title>
      </Head>
      <h2 className="text-black2 md:text-4xl font-bold text-center dark:text-grey text-5xl smb:mt-10">
        About Me😊
      </h2>
      <div className="flex smb:flex-col md:px-28 md:mt-0 md:flex-row items-center self-center justify-center sm:mt-10">
        <div className="w-72 rounded-xl md:self-start smb:self-center overflow-hidden flex items-center justify-center mt-10">
          <Image alt="profile" src={"/about.jpeg"} />
        </div>
        <div className="smb:mt-5 smb:w-full smb:p-5 md:ml-20 md:mt-0 md:p-10 md:w-full sm:ml-40 w-1/2">
          <h3 className="text-3xl font-bold text-purple">Learn about me</h3>
          <p className="text-2xl font-Russo-One text-black2 mt-4 dark:text-white">
            I&lsquo; m Moganesan, Im a Full-Stack Web <br></br> & Mobile
            Application Developer.
          </p>
          <p className="text-black2 mt-5 font-medium dark:text-white">
            Love computers & programming. I can develop any kind of web and
            mobile applications with help of latest trending technologies, and i
            love to do this. I worked with various technologies like
            React,Node,Next and more, So i provide high quality web & mobile
            applications, and it will run any platforms.
          </p>
          <div className="grid smb:grid-cols-1 sm:grid-cols-2 mt-10 gap-5">
            <div>
              <p className="font-bold">Name:</p>
              <div className="font-bold text-purple text-lg">Moganesan</div>
            </div>
            <div>
              <p className="font-bold">DOB:</p>
              <div className="font-bold text-purple text-lg">Feb-18-2003</div>
            </div>
            <div>
              <p className="font-bold">From:</p>
              <div className="font-bold text-purple text-lg">
                Erode,Tamilnadu
              </div>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <div className="font-bold text-purple text-lg">
                contact@moganesan.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-20 smb:p-5 md:p-10 py-0">
        <h3 className="font-bold text-purple mt-10 text-2xl mb-10">Skills</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex items-center justify-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="react" width={100} height={100} src={React} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "95%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                95%
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="redux" width={100} height={100} src={Redux} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "90%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                90%
              </p>
            </div>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="tailwind" width={100} height={100} src={Tailwind} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "95%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                95%
              </p>
            </div>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="figma" width={100} height={80} src={Figma} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "88%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                88%
              </p>
            </div>
          </div>

          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="github" width={100} height={100} src={Github} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "79%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                79%
              </p>
            </div>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="firebase" width={100} height={100} src={Firebase} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "80%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                80%
              </p>
            </div>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="node" width={100} height={100} src={Node} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "85%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                85%
              </p>
            </div>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="linux" width={100} height={100} src={Linux} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "70%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                70%
              </p>
            </div>
          </div>
          <div className="flex items-center border-2 p-5 rounded-lg border-transparent hover:border-purple duration-500">
            <div>
              <Image alt="python" width={100} height={100} src={Python} />
            </div>
            <div className="w-full bg-black2 relative rounded-md overflow-hidden h-5 ml-10">
              <div className="bg-purple h-5" style={{ width: "75%" }}></div>
              <p className="absolute top-0 bottom-0 text-center text-white font-bold w-full ml-auto mr-auto">
                75%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="smb:p-10 sm:p-20">
        <h2 className="font-bold text-3xl text-black2 dark:text-white">
          🤞🏻My Services:
        </h2>
        <div className="smb:grid-cols-1 grid md:grid-cols-2 text-center place-items-center gap-20 mt-28">
          <div>
            <Image alt="frontend" src={FrontendDevelopment} />
            <p className="font-bold text-xl mt-5">Frontend Development</p>
          </div>
          <div>
            <Image alt="ui/ux" src={ResponsiveDesign} />
            <p className="font-bold text-xl mt-5">UI/UX Designing</p>
          </div>
          <div>
            <Image alt="backend" src={BackendDevelopment} />
            <p className="font-bold text-xl mt-5">Backend Development</p>
          </div>
          <div>
            <Image alt="app" src={AppDevelopment} />
            <p className="font-bold text-xl mt-10">
              Cross Platform App Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
