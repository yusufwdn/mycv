import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";

function Stars({ total }) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    let imgUrl =
      i <= total
        ? "https://img.icons8.com/parakeet/48/star.png"
        : "https://img.icons8.com/deco/48/star.png";

    result.push(imgUrl);
  }

  return (
    <div className="flex flex-wrap justify-center mt-3 mb-5">
      {result.map(function (imgUrl, key) {
        return (
          <img
            key={`star.${key}`}
            className="w-5 md:mx-1 mx-0"
            width="48"
            height="48"
            src={imgUrl}
            alt="star"
          />
        );
      })}
    </div>
  );
}

export default function Technology() {
  const technologies = [
    {
      title: "Laravel",
      star: 9,
      description:
        "With over 2 years of experience, I have handled a variety of projects with diverse case studies, which has cultivated a strong understanding of the Laravel ecosystem and framework. Because Laravel is a PHP-based framework, therefore I can also understand the PHP programming language.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=qfQaIYKX23qY&format=png&color=000000",
        alt: "external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo",
      },
    },
    {
      title: "Bootstrap",
      star: 8,
      description:
        "I have a solid proficiency in utilizing Bootstrap. Throughout my involvement in various web-based projects, I routinely leverage Bootstrap as the primary framework for styling and layout. Based on this, of course I understand the project environment that uses Bootstrap.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
        alt: "bootstrap",
      },
    },
    {
      title: "TailwindCSS",
      star: 6,
      description:
        "I a good understanding and proficiency in styling and layout using TailwindCSS for web application projects. These skills enable me to create visually appealing and responsive interfaces. I am continually exploring new features and best practices in TailwindCSS to enhance my design capabilities further.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
        alt: "tailwind_css",
      },
    },
    {
      title: "Javascript",
      star: 7,
      description:
        "I possess the ability to utilize JavaScript for web development, often combining it with Laravel in my projects. With a solid understanding of JavaScript operations, I can develop interactive and responsive interfaces while enhancing the overall functionality of web applications.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        alt: "javascript--v1",
      },
    },
    {
      title: "Node.js",
      star: 7,
      description:
        "I have a good understanding of the fundamentals of Node.js and a reasonable knowledge of developing RESTful API services. I am capable of designing and implementing the necessary endpoints and creating unit tests to ensure that the basic functions of the application work as expected.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        alt: "node-js",
      },
    },
    {
      title: "React Js",
      star: 5,
      description:
        "I have a foundational understanding and knowledge of the features available in React.js, including slicing HTML, using React components, state management, API integration, and the basics of hooks. This experience has helped me grasp the fundamental workings of React and how to implement it in projects.",
      imageComponent: {
        width: "100",
        height: "100",
        src: "https://img.icons8.com/plasticine/100/react.png",
        alt: "react",
      },
    },
    {
      title: "Go",
      star: 5,
      description:
        "I have a good understanding and knowledge of the Go work environment, along with the ability to develop back-end systems using REST architecture. Currently, I am exploring the implementation of microservices in Golang to upgrade my skills and understanding in building more complex applications.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://icon.icepanel.io/Technology/svg/Go.svg",
        alt: "golang-icon-from-tech-icons",
      },
    },
    {
      title: "MySQL",
      star: 7,
      description:
        "I frequently utilize MySQL as a key component in my projects. So, I have practical experience and good understanding in making queries for database transactions. I am also able to design databases according to the needs of the application to be developed.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
        alt: "mysql-logo",
      },
    },
    {
      title: "Git",
      star: 7,
      description:
        "I have a good understanding of the concept of using Git commands for my project collaboration needs. I also have experience collaborating effectively with teams on projects using Git. This experience has enhanced my ability to engage in collaborative software development.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
        alt: "git",
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col bg-slate-100">
        <section className="h-100 px-4 py-12 mb-10 md:pl-10 md:pr-2 pl-8 pr-5 mt-12">
          <h5 className="text-center text-3xl mb-16 font-medium">
            <span className="flex flex-col justify-center items-center">
              TECHNOLOGIES 
              <div className="border-b-2 md:w-96 w-64 pb-1 border-purple-500"></div>
            </span>
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {technologies.map(function (item, key) {
              return (
                <div
                  className="flex flex-col relative justify-center border-2 border-purple-500 rounded-xl py-4 px-6 md:mx-4 mx-0 mb-8 bg-white box-shadow-5"
                  key={`skill.${key}`}
                >
                  <img
                    className="absolute border-2 border-purple-500 bg-white p-1 rounded-md -left-6 -top-6 w-16 box-shadow-5"
                    width={item.imageComponent.width}
                    height={item.imageComponent.height}
                    src={item.imageComponent.src}
                    alt={item.imageComponent.alt}
                  />
                  <h5 className="text-2xl font-medium text-center">
                    {item.title}
                  </h5>
                  <Stars total={item.star} />
                  <p className="text-md text-justify">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
