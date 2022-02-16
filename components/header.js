import React, { useEffect } from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const menus = [
    {
      name: "Home",
      id: "home-menu",
      route: "/",
      class: `${"text-grey2 duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple"} ${
        router.pathname == "/" ? "active" : ""
      }`,
    },
    {
      name: "About",
      route: "/about",
      id: "about-menu",
      class: `${"text-grey2 duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple"} ${
        router.pathname == "/about" ? "active" : ""
      }`,
    },
    {
      name: "Work",
      route: "/work",
      id: "work-menu",
      class: `${"text-grey2 duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple"} ${
        router.pathname == "/work" ? "active" : ""
      }`,
    },
    {
      name: "Contact",
      route: "/contact",
      id: "contact-menu",
      class: `${"text-grey2 duration-500 p-2 border-2 border-transparent border-solid rounded-md cursor-pointer font-bold hover:text-white hover:bg-purple border-purple"} ${
        router.pathname == "/contact" ? "active" : ""
      }`,
    },
  ];

  return (
    <div className="w-full h-20 bg-white border-b-2 border-grey flex items-center px-14 font-Nunito">
      <div className="flex flex-1">
        <Link passHref href="/">
          <Image className="cursor-pointer" alt="logo" src={Logo} />
        </Link>
      </div>

      <ul className="flex flex-1 justify-between">
        {menus.map((menu) => (
          <Link key={menu.id} passHref href={menu.route}>
            <li id={menu.id} className={menu.class}>
              <a>{menu.name}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
