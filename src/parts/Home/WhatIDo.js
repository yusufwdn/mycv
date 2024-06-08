import React from "react";

export default function WhatIDo() {
  const things = [
    {
      title: "System Analyze",
      description:
        "Menganalisa alur sistem, desain database, serta kebutuhan lainnya pada sebuah aplikasi yang dibuat sesuai dengan apa yang diinginkan oleh client.",
      image: require("../../assets/icons/analyze.png"),
    },
    {
      title: "Web Development",
      description:
        "Mengkonversi tampilan desain web, mengembangkan serta pemeliharaan fitur pada aplikasi web dengan menggunakan teknologi mutakhir.",
      image: require("../../assets/icons/web-development.png"),
    },
    {
      title: "API Service & Integration",
      description:
        "Membuat, mengembangkan, memelihara sistem layanan API serta melakukan integrasi suatu aplikasi dengan ekosistem aplikasi lainnya.",
      image: require("../../assets/icons/web-api.png"),
    },
    {
      title: "Creativity",
      description:
        "Gemar menyumbangkan berbagai ide positif terhadap projek yang dapat membuat hal tersebut menjadi lebih estetik, menarik, dan sistematik.",
      image: require("../../assets/icons/skill.png"),
    },
    {
      title: "Problem Solving",
      description:
        "Selalu melihat ke dalam berbagai pandangan yang berbeda serta menerapkan pemikiran yang dingin dan logis dalam memecahkan masalah.",
      image: require("../../assets/icons/logic.png"),
    },
    {
      title: "Collaborate",
      description:
        "Melakukan kolaborasi dan komunikasi dengan tim yang terkait untuk mencegah terjadinya miskomunikasi serta dapat mencapai target bersama-sama.",
      image: require("../../assets/icons/collaborate-with-teams.png"),
    },
  ];
  return (
    <section className="h-100 px-4 pt-20 mb-10 bg-slate-100" id="what-i-do">
      <h5 className="flex flex-col justify-center items-center text-center text-3xl mb-10 font-medium">
        Apa yang Saya Lakukan?
        <div className="border-b-2 md:w-96 w-56 pb-1 border-purple-500"></div>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {things.map(function (item, key) {
          return (
            <div
              // className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-white box-shadow-5 md:mx-0 mx-3"
              className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-white md:mx-0 mx-3 hover:-translate-y-2 hover:drop-shadow-xl duration-300"
              key={`whatido.${key}`}
            >
              <img src={item.image} className="w-8 drop-shadow-lg" alt="img" />
              <h5 className="text-lg font-medium mt-2 mb-3">{item.title}</h5>
              <p className="text-md text-justify">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
