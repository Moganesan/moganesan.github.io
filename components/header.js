import React, { useEffect, useState } from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";
import GithubLogo from "../public/technologyIcons/github.svg";
import GithubLogoWhite from "../public/technologyIcons/github.white.svg";
import SunLogo from "../public/icons/sunny-outline.svg";
import MoonLogo from "../public/icons/moon-outline.svg";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Menu from "../public/icons/menu.svg";
import MenuWhite from "../public/icons/menu-white.svg";
import Modal from "./modal";
import CloseIcon from "../public/icons/close.svg";
import Link from "next/link";
import { route } from "next/dist/server/router";

const Header = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menus = [
    {
      name: "Home",
      id: "home-menu",
      route: "home",
      class: `${"duration-500 p-2 cursor-pointer font-bold hover:border-green border border-transparent text-green w-32 flex items-center justify-center"}`,
    },
    {
      name: "About",
      route: "about",
      id: "about-menu",
      class: `${"duration-500 p-2 cursor-pointer font-bold hover:border-green border border-transparent text-green w-32 flex items-center justify-center"}`,
    },
    {
      name: "Projects",
      route: "projects",
      id: "work-menu",
      class: `${"duration-500 p-2 cursor-pointer font-bold hover:border-green border border-transparent text-green w-32 flex items-center justify-center"}`,
    },
    {
      name: "Contact",
      route: "contact",
      id: "contact-menu",
      class: `${"duration-500 p-2 cursor-pointer font-bold hover:border-green border border-transparent text-green w-32 flex items-center justify-center"}`,
    },
  ];

  return (
    <div
      className={`text-grey2 w-full h-20 z-50 border-b-2 border-green flex items-center smb:px-5 sm:px-14 font-Nunito sticky ${
        isSticky ? "top-0" : ""
      }`}
    >
      <div className="flex flex-1">
        <Link passHref href="/">
          <Image className="cursor-pointer" alt="logo" src={Logo} />
        </Link>
      </div>
      {mobileMenu ? (
        <Modal>
          <div className="fixed dark:text-black2 w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center transparant-black">
            <ul className="bg-white px-20 p-5 flex flex-col items-center rounded-lg">
              <li
                className={`${"px-5 p-2 mt-5 font-bold rounded-lg duration-500 text-xl hover:bg-purple hover:text-white border-2"} `}
              >
                Home
              </li>

              <li
                className={`${"px-5 p-2 mt-5 font-bold rounded-lg duration-500 text-xl hover:bg-purple hover:text-white border-2"} ${
                  router.pathname == "/about"
                    ? "border-purple"
                    : "border-transparent"
                }`}
              >
                About
              </li>

              <li
                className={`${"px-5 p-2 mt-5 font-bold rounded-lg duration-500 text-xl hover:bg-purple hover:text-white border-2"} ${
                  router.pathname == "/work"
                    ? "border-purple"
                    : "border-transparent"
                }`}
              >
                Projects
              </li>

              <li
                className={`${"px-5 p-2 mt-5 font-bold rounded-lg duration-500 text-xl hover:bg-purple hover:text-white border-2"} ${
                  router.pathname == "/contact"
                    ? "border-purple"
                    : "border-transparent"
                }`}
              >
                Contact
              </li>

              <li className="mt-5">
                <button onClick={() => setMobileMenu(!mobileMenu)}>
                  <Image alt="close" src={CloseIcon} />
                </button>
              </li>
            </ul>
          </div>
        </Modal>
      ) : null}

      <ul className="smb:flex flex-auto justify-around sm:hidden">
        <li className="flex items-center">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/Moganesan/"
          >
            {theme == "light" ? (
              <Image alt="github" width={35} height={35} src={GithubLogo} />
            ) : (
              <Image
                alt="github"
                width={35}
                height={35}
                src={GithubLogoWhite}
              />
            )}
          </a>
        </li>
        <li className="flex items-center">
          <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
            {theme == "light" ? (
              <Image alt="dark" width={35} height={35} src={MoonLogo} />
            ) : (
              <Image alt="light" width={35} height={35} src={SunLogo} />
            )}
          </button>
        </li>
        <li className="flex items-center">
          {theme == "light" ? (
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              <Image alt="menu" src={Menu} />
            </button>
          ) : (
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              <Image alt="menu" src={MenuWhite} />
            </button>
          )}
        </li>
      </ul>

      <ul className="flex flex-auto smb:hidden sm:flex justify-between">
        {menus.map((menu) => (
          <li
            onClick={() => scrollToSection(menu.route)}
            id={menu.id}
            className={menu.class}
          >
            <a>{menu.name}</a>
          </li>
        ))}

        <li className="flex items-center">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/Moganesan/"
          >
            {theme == "light" ? (
              <Image alt="github" width={40} height={40} src={GithubLogo} />
            ) : (
              <Image
                alt="github"
                width={40}
                height={40}
                src={GithubLogoWhite}
              />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
