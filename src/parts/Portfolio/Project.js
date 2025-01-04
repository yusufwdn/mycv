import React from "react";

export default function Project() {
  const projects = [
    {
      title: "BUMDES KITA",
      description:
        "A marketplace application that sells products and rents services related to the fields of agriculture, plantations, and animal husbandry created for farmers and similar entrepreneurs.",
      thumbnail: require("../../assets/images/portfolio/bumdes.jpg"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Lumen",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Backend Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "Bundapedia",
      description:
        "An application built to provide special education for pregnant women, parenting, and selling products for pregnant women, childbirth, and baby needs.",
      thumbnail: require("../../assets/images/portfolio/bundapedia.jpg"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Laravel",
        },
        {
          title: "MySQL",
        },
        {
          title: "Web Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "Spazie",
      description:
        "It is a web and mobile based application built for hotel accommodation booking needs.",
      thumbnail: require("../../assets/images/portfolio/spazie.jpg"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Lumen",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Backend Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "SIN Indonesia",
      description:
        "A mobile-based online store application built specifically to sell SIN Indonesia's products.",
      thumbnail: require("../../assets/images/portfolio/sin-indonesia.png"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Lumen",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Backend Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "Order Non Stop",
      description:
        "A mobile-based application that sells famous items by implementing the concept of social media in it.",
      thumbnail: require("../../assets/images/portfolio/order-non-stop.jpg"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Lumen",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Backend Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "Beliyuu",
      description:
        "A web and mobile-based marketplace application system built to sell products from local micro-medium entrepreneurs.",
      thumbnail: require("../../assets/images/portfolio/beliyuu.jpg"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Lumen",
        },
        {
          title: "CodeIgniter 3",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "API Integration",
        },
        {
          title: "Web Development",
        },
        {
          title: "Backend Development",
        },
      ],
    },
    {
      title: "PEPI SIAKAD",
      description:
        "An information system application for academic operations and a web-based learning management system (LMS) used to assist lecturers and students in lectures at the Politeknik Enjiniring Pertanian Indonesia (PEPI).",
      thumbnail: require("../../assets/images/portfolio/pepi-dashboard.png"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Laravel",
        },
        {
          title: "Livewire",
        },
        {
          title: "Bootstrap",
        },
        {
          title: "JavsScript",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Web Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
  ];

  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {projects.map(function (item, key) {
        return (
          <div
            className="rounded-lg overflow-hidden shadow-lg bg-white"
            key={`project.${key}`}
          >
            <img
              className="w-full"
              src={item.thumbnail}
              alt={`${item.title}.${key}`}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base text-justify">
                {item.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.skills.map(function (item, key) {
                return (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={`skill.${key}`}
                  >
                    #{item.title}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
