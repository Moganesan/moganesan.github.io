import Image from "next/image";
import { useState } from "react";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";
import AuroraTipBotLogo from "../public/projectLogos/auroratipbot.svg";
import Link from "next/link";

const Projects = () => {
  const [projects, setProject] = useState([
    {
      id: 1,
      name: "Aurora Tip Bot",
      category: "Web Application",
      link: "https://auroratipbot.xyz/",
      image: "./projectLogos/auroratipbot.svg",
      description: (
        <div>
          <br />
          <h1>Summary:</h1>
          <br />
          <p>
            The primary objective of this project is to develop a comprehensive
            system for tipping Aurora tokens to Telegram users. This
            multifaceted project consists of three core components: Frontend,
            Backend (Telegram Bot Server), and Smart Contract.
          </p>
          <br />
          <h2>1. Frontend:</h2>
          <br />
          <p>
            The frontend serves as the user interface for this system and plays
            a crucial role in facilitating token transactions. Users are
            required to connect their Metamask wallet to the website to get
            started. Once connected, they can deposit Aurora tokens into the
            system. The website is seamlessly integrated with the Aurora Tip Bot
            smart contract, enabling users to initiate deposits. Initially, the
            balance is tracked using the wallet address. After depositing
            tokens, users gain the ability to tip specified amounts to Telegram
            users.
          </p>
          <br />
          <h2>2. Backend (Telegram Bot Server):</h2>
          <br />
          <p>
            The backend component is responsible for managing the Aurora
            Telegram bot. To engage with the system, users must first link their
            Metamask wallet to their Telegram account. This is achieved by
            sending a /login walletaddress request to the Aurora Community Tip
            Bot deployed within the Telegram environment. The bot responds with
            a login URL upon successful connection. Once the wallet address is
            linked to Telegram, users can utilize the /balance command to check
            their token balance. To initiate tips to other Telegram users, they
            can visit any public group and use the /tip amount recipientusername
            command. The bot takes care of the transaction, updating the balance
            within the contract. Subsequently, recipients can withdraw their
            tipped tokens through the frontend interface.
          </p>
          <br />
          <p>
            In summary, this projects goal is to create a seamless and
            user-friendly ecosystem for tipping Aurora tokens to Telegram users.
            The Frontend, Backend, and Smart Contract components work to enable
            users to connect their wallets, deposit tokens, and effortlessly
            send tips to their fellow Telegram users, enhancing the utility and
            accessibility of Aurora tokens within the Telegram community.
          </p>
        </div>
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
    {
      id: 2,
      name: "Klvien The Complete College Management Sytem",
      category: "Web Application",
      link: "https://github.com/Moganesan/klvien-college-management-system.git",
      image: "./projectLogos/klvien.svg",
      description: (
        <div>
          <br />
          <h1>Summary:</h1>
          <br />
          <p>
            Klvien is a complete college management software. i have started
            this project when i was in my first year of college. inspired by the
            application already used in my college management. klvien is aimed
            to provide a attractive user interface with full set of
            functionalities for managing the students exams, projects, online
            classes and more and also it will allow management to manage
            teachers activities.
          </p>
          <br />
          <h2>1. Frontend:</h2>
          <br />
          <p>
            The Frontend is build using react, redux, and styles-components i
            have designed the ui/ux in figma and i used react for building the
            frontend. klvien includes 3 frontend application. those are
            students, staff, and management all are build using react.
          </p>
          <br />
          <h2>2. Backend:</h2>
          <br />
          <p>
            the backend is responsible for serving information to the student
            application, staff application and management application. i have
            used firebase as a database and used firebase-admin sdk with
            nodes.js and the authentication system is build by using jwt and i
            stored the keys in browser cookies.
          </p>
          <br />
          <p>
            it was a very excited project for me because at that time i aimed to
            make it as a SaaS product for my college. and i woked very hard for
            that. after 3 months of development this project got a good
            impression.
          </p>
        </div>
      ),
      tags: [
        "React.js",
        "Redux",
        "Styled-Components",
        "Firebase",
        "JWT",
        "Vercel",
        "Node.js",
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
            width="424"
            height="296"
            viewBox="0 0 424 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.8799 0.5L99.2975 0.500001V5.90688V6.40688H99.7975H153.747V12.1419V12.6419H154.247H401.064L423.5 65.0784V252.302L423.497 252.306L423.044 252.741L421.363 254.358L415.661 259.842L401.047 273.897C396.633 278.143 390.982 283.578 386.434 287.953L380.732 293.436L379.05 295.054L378.598 295.489L378.586 295.5H278.664V274.258V273.758H278.164H201.386H124.609H124.109V274.258V295.5H0.5V44.0356L17.2134 22.2372L33.8799 0.5Z"
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
                  src={projects[selectedProject]?.image}
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
            <Link
              rel="noreferrer"
              href={projects[selectedProject].link.toString()}
              target="_blank"
              className="px-6 py-2 border border-green hover:bg-greenBackground2 duration-500"
            >
              View Project
            </Link>
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
