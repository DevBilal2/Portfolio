"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { caseStudyData } from "@/assets/assets";
import Footer from "@/app/Components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug;
  const [isDark, setIsDark] = useState(false);
  const caseStudy = caseStudyData[slug];

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDark]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Case study not found</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[60vh] overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={caseStudy.bgImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center px-[12%]">
            <div className="text-center text-white">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4"
              >
                {caseStudy.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-Ovo mb-4"
              >
                {caseStudy.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
              >
                {caseStudy.overview}
              </motion.p>
              {caseStudy.link && (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-Ovo hover:bg-gray-200 transition mt-4"
                >
                  View Live Project
                  <Image
                    src={assets.send_icon}
                    alt="external link"
                    className="w-4 h-4"
                  />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <div className="px-[12%] py-6">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-gray-700 dark:text-white hover:opacity-70 transition w-max"
          >
            <Image
              src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
              alt="back"
              className="w-5 rotate-180"
            />
            <span className="font-Ovo">Back to Projects</span>
          </Link>
        </div>

        {/* Content Section */}
        <div className="px-[12%] py-12 max-w-5xl mx-auto">
          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-Ovo mb-4 text-gray-800 dark:text-white">
              The Challenge
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.challenge}
            </p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-Ovo mb-4 text-gray-800 dark:text-white">
              The Solution
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.solution}
            </p>
          </motion.section>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-Ovo mb-6 text-gray-800 dark:text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-Ovo mb-6 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <ul className="space-y-3">
              {caseStudy.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                >
                  <span className="text-2xl mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg"
          >
            <h2 className="text-3xl font-Ovo mb-4 text-gray-800 dark:text-white">
              Results
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.results}
            </p>
          </motion.section>
        </div>
      </div>
      <Footer isDark={isDark} />
    </>
  );
}

