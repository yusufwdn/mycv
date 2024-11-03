import React from "react";

export default function Skills() {
  const things = [
    {
      title: "System Analyze",
      description:
        "Analyze system flow, database design, business process, and other needs in applications created according to client requests.",
      image: require("../../assets/icons/analyze.png"),
    },
    {
      title: "Web Development",
      description:
        "Implement designed web pages into the web versions, develop and maintain features in web applications using the latest technology.",
      image: require("../../assets/icons/web-development.png"),
    },
    {
      title: "API Service & Integration",
      description:
        "Build, develop, and maintain API service systems and integrate project applications with other application ecosystems.",
      image: require("../../assets/icons/web-api.png"),
    },
    {
      title: "Creativity",
      description:
        "Contribute positive ideas such as designs and features to the project that can make it more aesthetic, attractive and systematic.",
      image: require("../../assets/icons/skill.png"),
    },
    {
      title: "Problem Solving",
      description:
        "Always look from different points of view and always think calmly, patiently and logically in solving every problems.",
      image: require("../../assets/icons/logic.png"),
    },
    {
      title: "Collaborate",
      description:
        "Collaborate and communicate with related teams to establish cooperation in every projects, prevent miscommunication and achieve targets together.",
      image: require("../../assets/icons/collaborate-with-teams.png"),
    },
  ];
  return (
    <section className="h-100 px-4 pt-20 mb-10 bg-slate-100" id="what-i-do">
      <h5 className="flex flex-col justify-center items-center text-center text-3xl mb-10 font-medium">
        MAIN SKILLS
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
