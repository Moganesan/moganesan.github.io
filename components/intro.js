import React, { useEffect } from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center md:p-10 p-24 text-white bg-darkBackground2 smb:py-10 smb:p-4">
      <span className="w-2/3 text-2xl text-center smb:text-xl smb:w-full sm:w-2/3 md:w-1/2 text-text1">
        {"<p>"}
        <p className="text-white">
          My name is Moganesan, and I&apos;m a full-stack developer with
          experience in various tech projects. I&apos;m passionate about what I
          do and eager to build somethin new.
        </p>
        {"</p>"}
      </span>
      <div className="grid w-full smb:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 text-center smb:m-10 mt-20">
        <div className="grid w-full place-items-center border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500">
          <div className="container items-center flex flex-col  p-10">
            <Image
              alt="designer"
              src={"/icons/brish.svg"}
              width={100}
              height={100}
            />
            <span className="text-text1 font-bold text-xl flex items-center justify-center mt-4">
              {"<h1>"}
              <h1 className="text-white text-2xl">Web Developer</h1>
              {"</h1>"}
            </span>
            <span className="text-text1 mt-5">
              {"<p>"}
              <p className="text-grey">
                I&apos;m a web development enthusiast with a broad skill set
                encompassing both frontend and backend technologies. On the
                frontend, I excel in building captivating and user-friendly
                websites, harnessing the power of Next.js, Tailwind CSS,
                React-Query, and TypeScript to deliver top-notch experiences.
                For backend development, I&apos;m well-versed in Node.js, MySQL,
                Firebase, and JWT, ensuring robust server-side functionality,
                data management, and authentication. My passion for web
                development extends to staying updated with the latest industry
                trends and continuously expanding my skill set to offer
                innovative solutions, all with the goal of creating exceptional
                web experiences.
              </p>
              {"</p>"}
            </span>
          </div>
        </div>

        <div className="grid place-items-center border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500">
          <div className="container items-center flex flex-col  p-10">
            <Image
              alt="designer"
              src={"/icons/blockchain.svg"}
              width={100}
              height={100}
            />
            <span className="text-text1 font-bold text-xl flex items-center justify-center mt-4">
              {"<h1>"}
              <h1 className="text-white text-2xl">Blockchain Developer</h1>
              {"</h1>"}
            </span>
            <span className="text-text1 mt-5">
              {"<p>"}
              <p className="text-grey">
                With one year of dedicated blockchain development experience,
                I&apos;ve honed my skills in various facets of the blockchain
                ecosystem. This includes EVM-based smart contract development,
                overseeing the entire blockchain development lifecycle using
                tools like Hardhat and Remix, and writing contracts for ERC-20
                tokens. I&apos;ve also seamlessly integrated these smart
                contracts into user-friendly frontend applications using
                Ethers.js and MetaMask. My work has extended to customer
                support, where I&apos;ve actively collected and implemented user
                feedback, enhancing the usability and functionality of web3
                applications. My most notable achievement is my involvement in a
                real-world decentralized application,
                <a
                  rel="noreferrer"
                  href="https://auroratipbot.xyz/"
                  target="_blank"
                  className="text-green"
                >
                  &quot;Aurora Tip Bot&quot;,
                </a>
                where I&apos;ve put my skills into action, solidifying my
                expertise in the blockchain space.
              </p>
              {"</p>"}
            </span>
          </div>
        </div>
        <div className="grid place-items-center border-2 border-transparent hover:border-green bg-greenBackground hover:bg-greenBackground2 duration-500">
          <div className="container items-center flex flex-col  p-10">
            <Image
              alt="designer"
              src={"/icons/drone.svg"}
              width={100}
              height={100}
            />
            <span className="text-text1 font-bold text-xl flex items-center justify-center mt-4">
              {"<h1>"}
              <h1 className="text-white text-2xl">Electronics Enthusiast</h1>
              {"</h1>"}
            </span>
            <span className="text-text1 mt-5">
              {"<p>"}
              <p className="text-grey">
                I have a deep-rooted love for tinkering with hardware and
                electronics. Whether it&apos;s building drones, hacking gadgets,
                or creating IoT devices, I find joy in bringing my ideas to
                life. My curiosity and problem-solving skills drive me to
                explore the endless possibilities of technology. My portfolio
                showcases my journey in the world of hardware, where I turn
                concepts into tangible solutions, fueling my passion for
                innovation and creativity.
              </p>
              {"</p>"}
              <br />
              <span className="flex mt-3 mb-3 items-center justify-center">
                {"<h1>"}
                <h1 className="text-green">Fav Hardwares</h1>
                {"</h1>"}
              </span>
              <span className="mt-4">
                {"<ul>"}
                <ul className="text-green">
                  <li>Arduino</li>
                  <li>NodeMCU</li>
                  <li>STM 32 Microcontroller</li>
                  <li>Rashberry Pi</li>
                </ul>
                {"</ul>"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
