import React, { useEffect } from "react";
import Hero from "../components/heroContainer";
import Intro from "../components/intro";
import Head from "next/head";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import Platforms from "../components/platforms";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="bg-darkBackground1 text-white">
      <Head>
        <title>Moganesan - Developer, Designed & Content Creator.</title>
      </Head>
      <div id="home">
        <Hero />
        <hr className="h-1 bg-green" />
        <Intro />
        <Technologies />
      </div>
      <hr className="h-1 bg-green" />
      <div id="projects">
        <Projects />
      </div>

      <hr className="h-1 bg-green" />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
