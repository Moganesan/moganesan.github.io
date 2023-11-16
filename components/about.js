import Image from "next/image";
import { useState } from "react";
import {
  ForwardIcon,
  BackwardIcon,
  DocumentTextIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import AuroraTipBotLogo from "../public/projectLogos/auroratipbot.svg";
import Link from "next/link";

const About = () => {
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
      <span className="text-text1 font-Russo-One text-4xl font-bold flex items-center justify-center">
        {"<h1>"}
        <h1 className="text-4xl  text-grey font-bold">About Me</h1>
        {"</h1>"}
      </span>
      <div className="flex smb:flex-col md:flex-row smb:items-center md:items-start justify-between mt-9">
        <div className="flex-grow sm:w-96 md:w-1/2 md:mt-20">
          <Image
            src={"/profile.jpeg"}
            width={500}
            height={500}
            alt="auroratipbot"
          />
        </div>
        <div className="flex-grow smb:mt-10 smb:w-full md:w-1/2 max-w-1/2 p-4">
          <h1 className="font-Russo-One text-md">
            Full Stack Blockchain Developer
          </h1>
          <h2 className="font-Russo-One text-green text-2xl">Moganesan M</h2>
          <p>
            Full Stack Software Engineer with a deep-rooted passion for
            technology. My journey into the world of software development has
            been an exciting and fulfilling one, starting during my school days
            when I first began assembling custom computers and exploring the
            intricacies of hardware components. It was during these early
            experiences that I discovered the limitless potential of technology
            and the ability to create something extraordinary.
          </p>
          <br />
          <p>
            As I delved deeper into the realm of technology, I realized that
            software development was where my true calling lay. The prospect of
            crafting innovative solutions that could be of real value to people
            was not only a source of hope but also a driving force that led me
            to embark on a lifelong learning journey. Software development
            ceased to be just a skill; it evolved into a hobby, a passion, and a
            means to not only pursue my interests but also generate income.
          </p>
          <br />
          <p>
            Throughout my career, I have encountered a myriad of software use
            cases and challenges. Each challenge presented an opportunity for
            growth and development, reinforcing my belief that I was making a
            tangible impact. This sense of contribution has become my fuel, the
            driving force behind what I do, and the key to my happiness.
          </p>
          <br />
          <p>
            Currently, my focus and ambition revolve around contributing to the
            thriving web3 community and ecosystem. I firmly believe that web3 is
            ushering in a new era of innovation and limitless possibilities
            within the internet. I am committed to playing an active role in
            this exciting journey, where blockchain technology,
            decentralization, and the transformative power of web3 are poised to
            redefine how we interact, transact, and create in the digital
            landscape.
          </p>
          <br />
          <p>
            My journey as a Full Stack Software Engineer has been marked by a
            relentless pursuit of knowledge, a deep passion for technology, and
            an unwavering commitment to making a meaningful impact. I am excited
            about the future, driven by the boundless potential of web3, and
            dedicated to contributing as much as possible to this ever-evolving
            space.
          </p>
          {/* 
          <div className="grid gap-10 mt-10 smb:grid-cols-2 md:grid-cols-4">
            <span className="px-5 py-2 border bg-greenBackground border-transparent text-center hover:border-green duration-500 overflow-hidden whitespace-nowrap text-ellipsis">
              Foot Ball
            </span>

            <span className="px-5 py-2 border bg-greenBackground border-transparent text-center hover:border-green duration-500 overflow-hidden whitespace-nowrap text-ellipsis">
              Gym
            </span>

            <span className="px-5 py-2 border bg-greenBackground border-transparent text-center hover:border-green duration-500 overflow-hidden whitespace-nowrap text-ellipsis">
              Music
            </span>

            <span className="px-5 py-2 border bg-greenBackground border-transparent text-center hover:border-green duration-500 overflow-hidden whitespace-nowrap text-ellipsis">
              Driving
            </span>

            <span className="px-5 py-2 border bg-greenBackground border-transparent text-center hover:border-green duration-500 overflow-hidden whitespace-nowrap text-ellipsis">
              Arduino Projects
            </span>
          </div> */}
          <div className="mt-10 flex smb:flex-col md:flex-row md:items-center justify-between">
            <Link
              rel="noreferrer"
              href={
                "https://www.canva.com/design/DAFzg7_nXBM/2R5PkzQpAmn-NzQipAgThg/edit"
              }
              target="_blank"
              className="mt-4"
            >
              <div className="px-6 py-2 border flex items-center w-fit border-green hover:bg-greenBackground2 duration-500">
                <DocumentTextIcon className="w-5 h-5 mr-3" />
                <span>Resume</span>
              </div>
            </Link>

            <Link
              rel="noreferrer"
              href={"https://www.youtube.com/@moganesanm973"}
              target="_blank"
              className="mt-4"
            >
              <div className="px-6 py-2 border flex items-center w-fit border-green hover:bg-greenBackground2 duration-500">
                <VideoCameraIcon className="w-5 h-5 mr-3" />
                <span>View On Youtube</span>
              </div>
            </Link>

            <Link
              rel="noreferrer"
              href={"https://github.com/moganesan"}
              target="_blank"
              className="mt-4"
            >
              <div className="px-6 py-2 border flex items-center w-fit border-green hover:bg-greenBackground2 duration-500">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C3.35826 0 0 3.44531 0 7.69085C0 11.0893 2.14955 13.9687 5.12946 14.9866C5.17126 14.9957 5.21392 15.0002 5.2567 15C5.5346 15 5.64174 14.7958 5.64174 14.6183C5.64174 14.4341 5.63504 13.952 5.6317 13.3091C5.38361 13.3673 5.12981 13.3976 4.875 13.3995C3.43192 13.3995 3.10379 12.2779 3.10379 12.2779C2.76228 11.3906 2.27009 11.1529 2.27009 11.1529C1.61719 10.6942 2.26674 10.6808 2.31696 10.6808H2.32031C3.07366 10.7478 3.46875 11.4777 3.46875 11.4777C3.84375 12.1339 4.34598 12.3181 4.79464 12.3181C5.09131 12.3121 5.38338 12.2437 5.65179 12.1172C5.71875 11.6216 5.91295 11.2835 6.12723 11.0893C4.46317 10.8951 2.71205 10.2355 2.71205 7.28906C2.71205 6.44866 3.00335 5.76227 3.48214 5.22656C3.40513 5.03236 3.14732 4.24888 3.5558 3.19085C3.6106 3.17774 3.66691 3.1721 3.72321 3.17411C3.99442 3.17411 4.60714 3.2779 5.6183 3.98103C6.84694 3.63727 8.14636 3.63727 9.375 3.98103C10.3862 3.2779 10.9989 3.17411 11.2701 3.17411C11.3264 3.1721 11.3827 3.17774 11.4375 3.19085C11.846 4.24888 11.5882 5.03236 11.5112 5.22656C11.99 5.76562 12.2812 6.45201 12.2812 7.28906C12.2812 10.2422 10.5268 10.8917 8.85603 11.0826C9.12388 11.3203 9.36496 11.7891 9.36496 12.5056C9.36496 13.5335 9.35491 14.3638 9.35491 14.615C9.35491 14.7958 9.4587 15 9.73661 15C9.78159 15.0002 9.82648 14.9957 9.87053 14.9866C12.8538 13.9687 15 11.0859 15 7.69085C15 3.44531 11.6417 0 7.5 0Z"
                    fill="white"
                  />
                </svg>

                <span className="ml-3">Github</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
