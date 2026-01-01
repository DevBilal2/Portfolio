import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const About = ({ isDark }) => {
  const [hove, setHover] = useState(null);
  const ImagesName = ["vscode", "firebase", "mongodb", "figma", "git"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-16"
    >
      <motion.h4
        className="text-center  text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center  text-5xl font-Ovo "
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-16 my-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="text-left max-w-2xl   mb-2 font-Ovo">
            I am a Zoho Developer skilled in CRM customization, Deluge
            scripting, and workflow automation across Zoho applications such as
            Creator, Books, Desk, Inventory and More. I also work with REST APIs
            and third-party integrations to build complete business automation
            solutions. Alongside Zoho, I am expanding my expertise in the MERN
            stack and Next.js for modern web development.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1.5 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDark ? iconDark : icon}
                  alt="title"
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm  dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-1 text-gray-700 font-Ovo font-bol dark:text-white/80"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className=" flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                whileHover={{ scale: 1.1 }}
                key={index}
                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500  "
              >
                {hove === index && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white dark:text-black dark:bg-white text-xs px-3 py-2 rounded-lg shadow-lg">
                    {ImagesName[index]}
                    {/* Small triangle pointing upwards */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 dark:border-b-white border-b-gray-800"></div>
                  </div>
                )}
                <Image src={tool} alt={tool} className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
