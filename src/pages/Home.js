import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Hero from "../parts/Home/Hero";
import Skill from "../parts/Home/Skill";
import TechnologySlider from "../parts/Home/TechnologySlider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col overflow-hidden">
        <Hero />
        <Skill />
        <TechnologySlider />
      </div>
      <Footer />
      
    </>
  );
}
