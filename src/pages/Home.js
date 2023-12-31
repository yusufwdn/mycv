import React from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Hero from "../parts/Home/Hero";
import WhatIDo from "../parts/Home/WhatIDo";

export default function Home() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#fff" },
      line_linked: {
        color: "#fff",
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 600 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: { density: { enable: true, value_area: 800 }, value: 600 },
      opacity: {
        anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
        random: {
          enable: true,
          minimumValue: 0.3,
        },
        value: 0.6,
      },
      shape: {
        type: "star",
      },
      size: {
        anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
        random: false,
        value: 1,
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Hero />
        <WhatIDo />
      </div>
      <Footer />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </>
  );
}
