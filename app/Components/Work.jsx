import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Work = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState("zoho"); // default tab

  // Filter projects by active tab
  const filteredWork = workData.filter((project) => project.type === activeTab);

  return (
    <motion.div
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-16"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-6 font-Ovo"
      >
        Explore a collection of projects showcasing my expertise in Zoho
        automation and web development.
      </motion.p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["web", "zoho"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-Ovo transition ${
              activeTab === tab
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {tab === "web" ? "Web Projects" : "Zoho Projects"}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 dark:text-black"
      >
        {filteredWork.map((project, index) => (
          <a
            key={index}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-no-repeat bg-contain bg-center  rounded-lg relative cursor-pointer group overflow-hidden"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center text-white">
                  <h2 className="font-semibold text-base sm:text-lg">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm mt-2 leading-snug">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-gray-200 opacity-90 rounded-md py-3 px-4 flex items-start justify-between gap-4 transition-all duration-500 group-hover:bottom-7">
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-sm sm:text-base break-words leading-tight">
                    {project.title}
                  </h2>
                </div>
                <div className="flex-shrink-0 border border-black rounded-full w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 hover:scale-105 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
