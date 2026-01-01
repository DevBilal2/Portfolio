import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDark }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f363c918-e052-48b0-bdda-f6253300d84b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="contact"
      className="dark:bg-none w-full px-[12%] py-10 scroll-mt-10 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 mt-2 text-lg font-Ovo"
      >
        Connect with Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center  text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-2 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
            name="name"
            type="text"
            placeholder="Enter You're Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/50 dark:border-white/90"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
            name="email"
            type="text"
            placeholder="Enter You're Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/50 dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.6 }}
          name="message"
          rows="6"
          placeholder="Enter You're Message"
          required
          className="w-full p-4  outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-2  dark:bg-darkHover/50 dark:border-white/90 "
        />
        <motion.button
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max  flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black  dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
