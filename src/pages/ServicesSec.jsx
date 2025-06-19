import React from "react";

const ServicesSec = () => {
  const services = [
    {
      title: "Dissertation Writing Service",
      desc: "Dubs aliquot vulgate leo, quia corvallis eros ornate a. Nulled in erat a mauris congee tempus. Suspensive commodo dui quam, vitae mollie orca efficient pulvinate.",
      icon: "📝",
      color: "text-violet-600",
    },
    {
      title: "Thesis Writing Help",
      desc: "Dubs aliquot vulgate leo, quia corvallis eros ornate a. Nulled in erat a mauris congee tempus. Suspensive commodo dui quam, vitae mollie orca efficient pulvinate.",
      icon: "📄",
      color: "text-yellow-500",
    },
    {
      title: "Online Exam & Quiz",
      desc: "Dubs aliquot vulgate leo, quia corvallis eros ornate a. Nulled in erat a mauris congee tempus. Suspensive commodo dui quam, vitae mollie orca efficient pulvinate.",
      icon: "📘",
      color: "text-pink-500",
    },
  ];

  return (
    <div className=" py-20 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-indigo-600 font-semibold tracking-wide uppercase mb-2">
          Excellent Service
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-14">
          Get Only New And Unique Boots Your <br className="hidden md:block" /> Edocoda Online Learning!
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div
                className={`text-5xl mb-6 ${service.color} inline-block animate-bounce`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center items-center gap-2">
          <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
          <span className="w-6 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSec;
