import React from "react";
import Hero from "../components/heroContainer";
import Intro from "../components/intro";
import Head from "next/head";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import Platforms from "../components/platforms";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moganesan - Developer, Designed & Content Creator.</title>
      </Head>
      <Hero />
      <Intro />
      <Technologies />
      <Platforms />
      <Projects />
      <Contact />
    </div>
  );
}
