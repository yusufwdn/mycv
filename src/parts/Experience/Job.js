import React from "react";

export default function Job() {
  const jobs = [
    {
      company_name: "PT. WAN Teknologi Internasional",
      company_logo: require("../../assets/images/company/wan-logo.png"),
      job_title: "Web Developer",
      job_range: "Sep 2021 - Sekarang",
      job_descriptions: [
        "Melakukan analisa terhadap alur sistem aplikasi yang diinginkan klien.",
        "Merancang, mengembangkan, menguji, dan memelihara sistem aplikasi web",
        "Mengembangkan layanan API untuk kebutuhan pengembang aplikasi web dan seluler pada proyek.",
        "Integrasikan aplikasi dengan layanan pihak ketiga seperti gateway pembayaran, sistem PPOB, SMS gateway, layanan pengiriman, dll.",
        "Berkolaborasi dengan tim lain dalam proyek untuk mencapai target proyek.",
        "Memastikan kode dapat dibaca dan mudah dipelihara.",
      ],
    },
    {
      company_name: "PT. Madani Intelsysdata",
      company_logo: require("../../assets/images/company/intelsysdata-logo.png"),
      job_title: "ETL Developer",
      job_range: "Sep 2020 - Agu 2021",
      job_descriptions: [
        "Mengembangkan aplikasi pelaporan untuk keperluan laporan keuangan bulanan di bank.",
        "Melakukan maintenance pada aplikasi yang sudah berjalan, baik itu penambahan fitur baru maupun perbaikan bug.",
        "Menjadi konsultan bagi perusahaan pembiayaan dalam melakukan pelaporan atas laporan keuangan bulanan.",
        "Melakukan peengolahan data yang akan digunakan untuk keperluan laporan keuangan dengan menggunakan SQL Query",
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
