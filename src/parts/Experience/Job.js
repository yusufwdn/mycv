import React from "react";

export default function Job() {
  const jobs = [
    {
      company_name: "PT. Elistec Informatika Utama",
      company_logo: require("../../assets/images/company/EIU-logo.png"),
      job_title: "Software Developer",
      job_range: "Nov 2023 - Now",
      job_descriptions: [
        "Develop application systems with multiple modules using K2 by Nintex, including database design, form creation, and workflow development.",
        "Build and optimize dynamic workflows to streamline and automate business processes effectively.",
        "Test and validate all created modules to ensure functionality, reliability, and alignment with client requirements.",
        "Collaborate with clients to tailor applications that meet specific business objectives and operational needs.",
        "Maintain and update applications to ensure seamless operations and adaptability to evolving business demands.",
        "Create comprehensive technical documentation to support development continuity and enhance team collaboration."
      ],
    },
    {
      company_name: "PT. WAN Teknologi Internasional",
      company_logo: require("../../assets/images/company/wan-logo.png"),
      job_title: "Web Developer",
      job_range: "Sep 2021 - Nov 2023",
      job_descriptions: [
        "Analyze client system needs to provide optimal solutions.",
        "Design and develop web applications according to identified bussiness flows.",
        "Build and maintain API services for web and/or mobile application needs.",
        "Ensure the application runs smoothly through maintenance and bug fixes.",
        "Collaborate with all teams related to the projects.",
        "Become a team leader for several projects.",
      ],
    },
    {
      company_name: "PT. Madani Intelsysdata",
      company_logo: require("../../assets/images/company/intelsysdata-logo.png"),
      job_title: "ETL Developer",
      job_range: "Sep 2020 - Agu 2021",
      job_descriptions: [
        "Develop reporting application for monthly financial report in a bank.",
        "Maintenance existing application (add new features and bug fixing).",
        "Become a consultant to assist finance companies in working on monthly financial report."
      ],
    },
  ];
  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {jobs.map(function (item, key) {
        return (
          <div
            className="bg-white rounded-lg md:mx-5 mx-1 mb-10 border-2 border-purple-500 box-shadow-5"
            key={key}
          >
            <div className="flex justify-center items-center leading-none">
              <img
                src={item.company_logo}
                alt="pic"
                className="max-h-40 w-100 md:h-40 h-28 mt-6 mb-4"
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-7">
              <h5 className="block text-xl font-semibold md:text-left text-center">
                {item.company_name}
              </h5>
              <span className="text-lg font-medium my-1">{item.job_title}</span>
              <span className="text-small font-small">{item.job_range}</span>
              <div className="ml-8 mr-5 mt-5">
                <ul className="list-disc space-y-2">
                  {item.job_descriptions.map(function (item, key) {
                    return (
                      <li key={`jd.${key}`} className="text-justify">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
