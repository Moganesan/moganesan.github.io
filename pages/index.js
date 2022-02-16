import React from "react";
import Hero from "../components/heroContainer";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import Platforms from "../components/platforms";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Technologies />
      <Platforms />
      <Projects />
      <Contact />
    </div>
  );
}
