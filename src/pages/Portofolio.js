import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Project from "../parts/Portfolio/Project";

export default function Portofolio() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-slate-100">
        <section className="flex flex-col items-center w-full h-100 px-4 py-12 mt-12">
          {/* <div className="flex flex-col items-center justify-center w-full"> */}
          <h5 className="text-center text-3xl mb-16 font-medium">
            <span className="flex flex-col justify-center items-center">
              Portofolio Proyek
              <div className="border-b-2 md:w-96 w-64 pb-1 border-purple-500"></div>
            </span>
          </h5>
          <Project />
          {/* </div> */}
        </section>
      </div>
      <Footer />
    </>
  );
}
