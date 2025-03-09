import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDark }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDark ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          m.bilalasif2004@gmail.com{" "}
        </div>
        <p>03284114902</p>
      </div>
      <div className="text-center sm:flex items-cneter justify-between border-t border-gray-400 mx-[10%] mt-12  py-6">
        <p> © 2025 Muhammad Bilal. All rights reserved.</p>
        <ul className=" flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/DevBilal2">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/DevBilal2">
              linkDin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/DevBilal2">
              twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;