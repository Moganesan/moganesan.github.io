import Next from "../public/technologyIcons/next.svg";
import React from "../public/technologyIcons/react.svg";
import Firebase from "../public/technologyIcons/firebase.svg";
import JavaScript from "../public/technologyIcons/javascript.svg";
import Node from "../public/technologyIcons/node.svg";
import Npm from "../public/technologyIcons/npm.svg";
import Linux from "../public/technologyIcons/linux.svg";
import VSCodeLogo from "../public/technologyIcons/vscode.svg";
import VercelLogo from "../public/technologyIcons/vercel.svg";
import EthereumLogo from "../public/technologyIcons/ethereum.svg";
import GoLogo from "../public/technologyIcons/golang.svg";
import AWSLogo from "../public/technologyIcons/aws.svg";
import GraphLogo from "../public/technologyIcons/graph.svg";
import HardhatLogo from "../public/technologyIcons/hardhat.svg";
import AuroraLogo from "../public/technologyIcons/aurora.svg";
import Python from "../public/technologyIcons/python.svg";
import Css from "../public/technologyIcons/css.svg";
import ArduinoLogo from "../public/technologyIcons/arduino.svg";
import RashberryPi from "../public/technologyIcons/rashberrypi.svg";
import GithubLogo from "../public/technologyIcons/github.svg";
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="sm:p-16 smb:p-5 smb:py-16 dark:bg-darkBackground2 bg-white">
      <div className="flex items-center justify-center mb-10 md:mb-20">
        <div className="w-fit">
          <span className="text-text1 font-Russo-One text-4xl font-bold flex items-center justify-center">
            {"<h1>"}
            <h2 className="text-4xl smb:w-full text-grey font-bold">
              Tools Box
            </h2>
            {"</h1>"}
          </span>
        </div>
      </div>
      <div className="grid smb:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10 justify-center justify-items-center justify-self-center content-center items-center">
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="javascript" src={JavaScript} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="css" src={Css} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="react" src={React} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="node" src={Node} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="npm" src={Npm} />
        </div>

        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="versel" src={VercelLogo} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="next" src={Next} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="vscode" src={VSCodeLogo} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="firebase" src={Firebase} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="linux" src={Linux} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="python" src={Python} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="ethereum" src={EthereumLogo} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="golang" src={GoLogo} />
        </div>

        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="aws" src={AWSLogo} />
        </div>

        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="aws" src={GraphLogo} />
        </div>

        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="hardhat" src={HardhatLogo} />
        </div>

        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="aurora" src={AuroraLogo} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="rashberrypi" src={RashberryPi} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="arduino" src={ArduinoLogo} />
        </div>
        <div className="border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500 p-5">
          <Image alt="github" src={GithubLogo} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
