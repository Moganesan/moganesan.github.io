import React, { useEffect } from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";
import GithubLogo from "../public/technologyIcons/github.svg";
import GithubLogoWhite from "../public/technologyIcons/github.white.svg";
import SunLogo from "../public/icons/sunny-outline.svg";
import MoonLogo from "../public/icons/moon-outline.svg";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, []);

  const menus = [
    {
      name: "Home",
      id: "home-menu",
      route: "/",
      class: `${"duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple"} ${
        router.pathname == "/"
          ? theme == "light"
            ? "active"
            : "active-dark"
          : ""
      }`,
    },
    {
      name: "About",
      route: "/about",
      id: "about-menu",
      class: `${"duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple"} ${
        router.pathname == "/about"
          ? theme == "light"
            ? "active"
            : "active-dark"
          : ""
      }`,
    },
    {
      name: "Work",
      route: "/work",
      id: "work-menu",
      class: `${"duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple"} ${
        router.pathname == "/work"
          ? theme == "light"
            ? "active"
            : "active-dark"
          : ""
      }`,
    },
    {
      name: "Contact",
      route: "/contact",
      id: "contact-menu",
      class: `${"duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple border-purple"} ${
        router.pathname == "/contact"
          ? theme == "light"
            ? "active"
            : "active-dark"
          : ""
      }`,
    },
  ];

  return (
    <>
      <div className="dark:bg-darkBackground1 dark:border-black text-grey2 dark:text-white w-full h-20 bg-white border-b-2 border-grey flex items-center px-14 font-Nunito">
        <div className="flex flex-1">
          <Link passHref href="/">
            <Image className="cursor-pointer" alt="logo" src={Logo} />
          </Link>
        </div>

        <ul className="flex flex-auto justify-between">
          {menus.map((menu) => (
            <Link key={menu.id} passHref href={menu.route}>
              <li id={menu.id} className={menu.class}>
                <a>{menu.name}</a>
              </li>
            </Link>
          ))}

          <li className="flex items-center">
            <a target={"_blank"} href="https://github.com/Moganesan/">
              {theme == "light" ? (
                <Image width={40} height={40} src={GithubLogo} />
              ) : (
                <Image width={40} height={40} src={GithubLogoWhite} />
              )}
            </a>
          </li>
          <li className="flex items-center">
            <button
              onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            >
              {theme == "light" ? (
                <Image width={40} height={40} src={MoonLogo} />
              ) : (
                <Image width={40} height={40} src={SunLogo} />
              )}
            </button>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  );
};

export default Header;
