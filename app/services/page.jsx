"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I provide end-to-end web development services specializing in responsive, performance-optimized websites using Next.js, React, JavaScript, HTML, and CSS. From design to deployment, I deliver tailored solutions that enhance user experience, ensure scalability, and drive business results. ",
    href: ""
  },
  {
    num: "02",
    title: "Power Bi",
    description: "I offer expert Power BI services, transforming raw data into interactive, insightful dashboards and reports. With advanced data modeling and visualization techniques, I help businesses make informed decisions, drive performance, and gain valuable insights. Let’s unlock the full potential of your data. ",
    href: ""
  },
  {
    num: "03",
    title: "Back Development",
    description: "I specialize in back-end development, creating secure, scalable server-side systems with efficient data management. Using technologies like Node.js and MongoDB, I design APIs and database solutions that ensure high performance and seamless integration across platforms. ",
    href: ""
  },
  {
    num: "04",
    title: "App development",
    description: "I develop desktop and mobile applications tailored for various operating systems, including Windows, macOS, iOS, and Android. Specializing in intuitive user experiences and robust functionality, I ensure seamless performance, security, and scalability across platforms. ",
    href: ""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (

    <section className="min-h-[80vh] flex-col flex justify-center py-12 xl:py-0"> 

      <div className = "container mx-auto">

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
           }}
           className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) =>{
            return (
              <div 
                key={index} 
                className="flex flex-col justify-center gap-6 group"
              >

                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{ service.num }</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

                {/*description*/}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>

      </div>

    </section>

  );
};

export default Services;