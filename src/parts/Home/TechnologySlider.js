import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, {useState} from 'react'
import Slider from "react-slick";

const TechnologySlider = () => {
    const [settings] = useState({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        },
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });

    const technologies1 = [
      {
        title: "Laravel",
        star: 8,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000",
          alt: "external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo",
        },
      },
      {
        title: "PHP",
        star: 7,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=39856&format=png&color=7950F2",
          alt: "icons8-php",
        },
      },
      {
        title: "Javascript",
        star: 7,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
          alt: "icons8-javascript",
        },
      },
      {
        title: "Go",
        star: 4,
        imageComponent: {
          src: "https://icon.icepanel.io/Technology/svg/Go.svg",
          alt: "golang-icon-from-tech-icons",
        },
      },
      {
        title: "Node.js",
        star: 5,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
          alt: "icons8-nodejs",
        },
      },
      {
        title: "Express",
        star: 5,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
          alt: "icons8-expressjs",
        },
      },
      {
        title: "React",
        star: 5,
        imageComponent: {
          width: "100",
          height: "100",
          src: "https://img.icons8.com/plasticine/100/react.png",
          alt: "icons8-react",
        },
      },
      {
        title: "Bootstrap",
        star: 8,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
          alt: "external-bootstrap-a-free-and-open-source-css-framework-logo-color-tal-revivo",
        },
      },
      {
        title: "TailwindCSS",
        star: 7,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
          alt: "incos8-tailwindcss",
        },
      }
    ];

    const technologies2 = [
      {
        title: "MySQL",
        star: 7,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
          alt: "external-MySQL-programming-and-development-those-icons-flat-those-icons",
        },
      },
      {
        title: "PostgreSQL",
        star: 6,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
          alt: "icons8-postgresql",
        },
      },
      {
        title: "Docker",
        star: 5,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
          alt: "icons8-docker",
        },
      },
      {
        title: "Git",
        star: 8,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
          alt: "icons8-git",
        },
      },
      {
        title: "Postman",
        star: 9,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=IoYmHUxgvrFB&format=png&color=000000",
          alt: "icons8-postman",
        },
      },
      {
        title: "Linux",
        star: 6,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=17842&format=png&color=000000",
          alt: "icons8-linux",
        },
      },
      {
        title: "Redis",
        star: 5,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
          alt: "icons8-redis",
        },
      },
      {
        title: "MongoDB",
        star: 5,
        imageComponent: {
          src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
          alt: "icons8-mongodb",
        },
      },
    ];

    // Your component logic
    return (
        <section className="bg-white z-10" id="Technologies">
          <div className="h-100 px-4 pt-14 mb-10">
            <h5 className="flex flex-col justify-center items-center text-center text-3xl font-medium">
              TECHNOLOGIES
              <div className="border-b-2 md:w-96 w-56 pb-1 border-purple-500"></div>
            </h5>
            <div className="bg-white pt-5">
              <Slider {...settings}>
                {technologies1.map((item, index) => (
                  <div className="text-center w-100 pt-10 pb-5">
                    <img
                      className="justify-self-center"
                      width={`85`}
                      src={item.imageComponent.src}
                      alt={item.imageComponent.alt}
                      key={`skill-slider.${index}`}
                    />
                    <p className="font-semibold py-5">{item.title}</p>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="bg-white pt-5">
              <Slider {...settings}>
                {technologies2.map((item, index) => (
                  <div className="text-center w-100 pt-10 pb-5">
                    <img
                      className="justify-self-center"
                      width={`85`}
                      src={item.imageComponent.src}
                      alt={item.imageComponent.alt}
                      key={`skill-slider.${index}`}
                    />
                    <p className="font-semibold py-5">{item.title}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="bg-white pb-10 text-center">
            <a href="/technologies" className="bg-purple-500 px-4 py-2 text-white rounded hover:bg-purple-700 hover:-translate-y-1 hover:scale-110 duration-300">Show Detail Skills</a>
          </div>
        </section>
      );
  };

  export default TechnologySlider;