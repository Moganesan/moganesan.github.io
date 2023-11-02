import HorizontalScroll from "react-scroll-horizontal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";
import AuroraTipBotLogo from "../public/projectLogos/auroratipbot.svg";

const Projects = () => {
  const [projects, setProject] = useState([
    {
      id: 1,
      name: "Aurora Tip Box",
      category: "Web Application",
      link: "www.auroratipbot.xyz",
      image: "https://auroratipbot.xyz/botIcon.svg",
      description: (
        <p>
          Summary: The primary objective of this project is to develop a
          comprehensive system for tipping Aurora tokens to Telegram users. This
          multifaceted project consists of three core components: Frontend,
          Backend (Telegram Bot Server), and Smart Contract. 1. Frontend: The
          frontend serves as the user interface for this system and plays a
          crucial role in facilitating token transactions. Users are required to
          connect their Metamask wallet to the website to get started. Once
          connected, they can deposit Aurora tokens into the system. The website
          is seamlessly integrated with the Aurora Tip Bot smart contract,
          enabling users to initiate deposits. Initially, the balance is tracked
          using the wallet address. After depositing tokens, users gain the
          ability to tip specified amounts to Telegram users. 2. Backend
          (Telegram Bot Server): The backend component is responsible for
          managing the Aurora Telegram bot. To engage with the system, users
          must first link their Metamask wallet to their Telegram account. This
          is achieved by sending a &quot;/login walletaddress request to the
          Aurora Community Tip Bot deployed within the Telegram environment. The
          bot responds with a login URL upon successful connection. Once the
          wallet address is linked to Telegram, users can utilize the
          &quot;/balance&quot; command to check their token balance. To initiate
          tips to other Telegram users, they can visit any public group and use
          the &quot;/tip amount recipientusername&quot; command. The bot takes
          care of the transaction, updating the balance within the contract.
          Subsequently, recipients can withdraw their tipped tokens through the
          frontend interface. In summary, this project&apos;s goal is to create
          a seamless and user-friendly ecosystem for tipping Aurora tokens to
          Telegram users. The Frontend, Backend, and Smart Contract components
          work to enable users to connect their wallets, deposit tokens, and
          effortlessly send tips to their fellow Telegram users, enhancing the
          utility and accessibility of Aurora tokens within the Telegram
          community.
        </p>
      ),
      tags: [
        "Next.js",
        "Tailwindcss",
        "Solidity",
        "Ethers.js",
        "Hardhat",
        "AWS",
        "Node.js",
        "Telegram API",
      ],
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(0);

  const forward = () => {
    setSelectedProject((prev) =>
      prev == projects.length - 1 ? prev : prev + 1
    );
  };

  const backward = () => {
    setSelectedProject((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="mt-20 md:px-44 smb:px-2 mb-10">
      <span className="text-text1 text-4xl font-bold flex items-center justify-center">
        {"<h1>"}
        <h1 className="text-4xl font-Russo-One text-grey font-bold">
          Projects
        </h1>
        {"</h1>"}
      </span>
      <div className="flex smb:flex-col md:flex-row smb:items-center md:items-start justify-between mt-9">
        <div className="flex-grow sm:w-96 md:w-1/2 md:mt-20">
          <svg
            width="462"
            height="322"
            viewBox="0 0 462 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M412.56 321.475L412.534 321.5H303.594V298.348V297.848H303.094H219.435H135.776H135.276V298.348V321.5H0.5V47.8889L18.7204 24.1641L36.894 0.5L108.242 0.500001V6.42572V6.92572H108.742H167.571V13.2084V13.7084H168.071H437.038L461.5 70.7858V274.483L461.483 274.499L460.99 274.972L459.158 276.732L452.945 282.697L437.021 297.987C432.212 302.606 426.054 308.519 421.098 313.277L414.885 319.243L413.053 321.002L412.56 321.475Z"
              fill="#01FF94"
              fillOpacity="0.05"
              stroke="#01FF94"
            />
            <foreignObject x="10" y="10" width="100%" height="100%">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="px-10 py-10 h-full w-full flex items-center justify-center"
              >
                <Image
                  src={AuroraTipBotLogo}
                  width={350}
                  height={150}
                  alt="auroratipbot"
                />
              </div>
            </foreignObject>
          </svg>
        </div>
        <div className="flex-grow smb:mt-10 smb:w-full md:w-1/2 max-w-1/2 p-4">
          <h1 className="font-Russo-One text-md">
            {projects[selectedProject]?.category}
          </h1>
          <h2 className="font-Russo-One text-green text-2xl">
            {projects[selectedProject]?.name}
          </h2>
          {projects[selectedProject]?.description}

          <div className="grid grid-flow-row gap-10 mt-10 smb:grid-cols-2 md:grid-cols-4">
            {projects[selectedProject]?.tags.map((tag, index) => {
              return (
                <div key={index}>
                  <span className="px-5 py-2 border bg-greenBackground border-transparent text-center hover:border-green duration-500 overflow-hidden whitespace-nowrap text-ellipsis">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <a
              rel="noreferrer"
              href={projects[selectedProject].link}
              target="_blank"
              className="px-6 py-2 border border-green hover:bg-greenBackground2 duration-500"
            >
              View Project
            </a>
          </div>
          <div className="flex items-center mt-10">
            <div>
              <svg
                width="93"
                height="81"
                viewBox="0 0 93 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.75 79H24.25L2 40.5L24.25 2H68.75L91 40.5L68.75 79Z"
                  stroke="#01FF94"
                  strokeWidth="3"
                />
                <foreignObject x="10" y="10" width="200" height="100">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className="h-16 flex items-center justify-center w-16"
                  >
                    <div className="flex ml-3 font-Russo-One text-xl">
                      <span className="text-green">{selectedProject + 1}</span>
                      {"/"}
                      <span>{projects.length}</span>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
            <div className="ml-10">
              <button>
                <BackwardIcon
                  onClick={backward}
                  className="w-11 h-11 text-green"
                />
              </button>
              <button className="ml-4">
                <ForwardIcon
                  onClick={forward}
                  className="w-11 h-11 text-green"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
