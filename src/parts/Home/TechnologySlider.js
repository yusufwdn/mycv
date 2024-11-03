import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, {useState} from 'react'
import Slider from "react-slick";

const TechnologySlider = () => {
    const [settings] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      // autoplaySpeed: 2000,
      // cssEase: 'linear',
    });

    const technologies = [
      {
        title: "Laravel",
        star: 8,
        description:
          "Dengan pengalaman bekerja lebih dari 2 tahun, saya telah mengerjakan berbagai proyek dengan studi kasus beragam. Tentunya saya telah memiliki pemahaman yang kuat tentang lingkungan dan kerangka kerja Laravel.",
        imageComponent: {
          width: "48",
          height: "48",
          // src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo.png",
          src: "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000",
          alt: "external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo",
        },
      },
      {
        title: "Livewire",
        star: 7,
        description:
          "Memiliki pemahaman yang cukup kuat dalam pengembangan web menggunakan Livewire. Karena saya sudah mengerjakan beberapa proyek dengan menggunakan Livewire sebagai komponen pendukung dari proyek yang berbasis Laravel.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://icon.icepanel.io/Technology/svg/Livewire.svg",
          alt: "livewire-logo-from-tech-icons",
        },
      },
      {
        title: "Livewire",
        star: 7,
        description:
          "Memiliki pemahaman yang cukup kuat dalam pengembangan web menggunakan Livewire. Karena saya sudah mengerjakan beberapa proyek dengan menggunakan Livewire sebagai komponen pendukung dari proyek yang berbasis Laravel.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=39856&format=png&color=7950F2",
          alt: "livewire-logo-from-tech-icons",
        },
      },
      {
        title: "Livewire",
        star: 7,
        description:
          "Memiliki pemahaman yang cukup kuat dalam pengembangan web menggunakan Livewire. Karena saya sudah mengerjakan beberapa proyek dengan menggunakan Livewire sebagai komponen pendukung dari proyek yang berbasis Laravel.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
          alt: "livewire-logo-from-tech-icons",
        },
      },
      {
        title: "Bootstrap",
        star: 8,
        description:
          "Saya cukup mahir dalam menggunakan Bootstrap. Karena selama tergabung dalam suatu proyek berbasis web, saya sering kali menggunakan Bootstrap sebagai kerangka kerja untuk styling dan layouting.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
          alt: "external-bootstrap-a-free-and-open-source-css-framework-logo-color-tal-revivo",
        },
      },
      {
        title: "TailwindCSS",
        star: 7,
        description:
          "Saya memiliki pemahaman serta kemampuan yang cukup baik dalam melakukan styling dan layouting dengan menggunakan TailwindCSS pada suatu proyek aplikasi berbasis web.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
          alt: "tailwind_css",
        },
      },
      {
        title: "Node Js",
        star: 5,
        description:
          "Memiliki pemahaman dan pengetahuan yang cukup baik pada fundamental Node Js, memiliki kemampuan dalam mengembangkan layanan RESTful API beserta membuat unit testing.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
          alt: "node-js",
        },
      },
      {
        title: "Node Js",
        star: 5,
        description:
          "Memiliki pemahaman dan pengetahuan yang cukup baik pada fundamental Node Js, memiliki kemampuan dalam mengembangkan layanan RESTful API beserta membuat unit testing.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
          alt: "node-js",
        },
      },
      {
        title: "React Js",
        star: 5,
        description:
          "Memiliki pemahaman dan pengetahuan dasar pada fitur yang terdapat di dalam React Js seperti slicing html, react component, state management, integrasi API, dan dasar-dasar hooks.",
        imageComponent: {
          width: "100",
          height: "100",
          src: "https://img.icons8.com/plasticine/100/react.png",
          alt: "react",
        },
      },
      {
        title: "Go",
        star: 4,
        description:
          "Memiliki pemahaman dan pengetahuan dasar dalam lingkungan kerja Go dan juga memiliki kemampuan untuk membuat sistem back-end dengan menerapkan artsitektur REST.",
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
          "Memiliki pengalaman, pemahaman, dan pengetahuan yang baik dalam pengoperasian query untuk keperluan transaksi database. Saya juga mampu merancang database untuk keperluan sistem aplikasi.",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
          alt: "external-MySQL-programming-and-development-those-icons-flat-those-icons",
        },
      },
      {
        title: "Git VCS",
        star: 7,
        description:
          "Memiliki pemahaman yang cukup baik tentang konsep serta penggunaan perintah Git, menyelesaikan konflik pada commit, serta melakukan kolaborasi dengan tim lain pada suatu proyek. ",
        imageComponent: {
          width: "48",
          height: "48",
          src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
          alt: "git",
        },
      },
    ];

    // Your component logic
    return (
        <div>
          <section className="h-100 px-4 py-14 mb-10 bg-white" id="Technologies">
            <h5 className="flex flex-col justify-center items-center text-center text-3xl mb-10 font-medium">
              TECHNOLOGIES
              <div className="border-b-2 md:w-96 w-56 pb-1 border-purple-500"></div>
            </h5>
            <div className="bg-white">
              <Slider {...settings}>
                {technologies.map((item, index) => (
                  <img
                    className="p-14"
                    // className="absolute border-2 border-purple-500 bg-white p-1 rounded-md -left-6 -top-6 w-16 box-shadow-5"
                    width={item.imageComponent.width}
                    height={item.imageComponent.height}
                    src={item.imageComponent.src}
                    alt={item.imageComponent.alt}
                    key={`skill.${index}`}
                  />
                ))}
              </Slider>
            </div>
          </section>
        </div>
      );
  };

  export default TechnologySlider;