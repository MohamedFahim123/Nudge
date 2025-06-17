import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-30 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-14">
        <div className="flex gap-4 md:col-span-9">
          <div className="flex-1/4">
            <Link href="/">
              <Image
                src="/images/Nudge_Default_Light.avif"
                alt="Nudge Logo"
                width={200}
                height={100}
                className="object-contain h-16 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex-3/4">
            <span className="text-xs font-semibold bg-gray-700 px-2 py-1 rounded">
              ABOUT
            </span>
            <p className="text-md max-w-xl mt-6 text-[#969696] leading-relaxed">
              Nudge Ltd. is a Jordan-based consulting firm serving the MENA
              region, dedicated to helping corporations maximize revenue through
              its proprietary Nudge Framework. Grounded in science and backed by
              evidence, the framework integrates psychology, innovation, and
              strategy to drive revenue growth.
            </p>
          </div>
        </div>


        <div className="flex flex-col gap-4 items-start md:col-span-3">
          <span className="text-xs font-semibold bg-gray-700 px-2 py-1 rounded">
            CONTACT
          </span>
          <Link
            href="mailto:info@nudgeltd.com"
            className="text-sm text-[#969696] hover:underline duration-300 transition-all hover:text-green-400"
          >
            info@nudgeltd.com
          </Link>
        </div>
      </div>

      <div className="border-t border-[#969696] flex flex-col items-center gap-4 pt-20">
        <div className="flex gap-6 text-gray-400 text-2xl mb-6">
          <Link className="p-4 rounded-full text-[#969696] transition-all duration-300 hover:text-green-300 border border-[#969696] hover:border-green-300" href="/" aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link className="p-4 rounded-full text-[#969696] transition-all duration-300 hover:text-green-300 border border-[#969696] hover:border-green-300" href="/" aria-label="X (Twitter)">
            <FaTimes />
          </Link>
          <Link className="p-4 rounded-full text-[#969696] transition-all duration-300 hover:text-green-300 border border-[#969696] hover:border-green-300" href="/" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link className="p-4 rounded-full text-[#969696] transition-all duration-300 hover:text-green-300 border border-[#969696] hover:border-green-300" href="/" aria-label="YouTube">
            <FaYoutube />
          </Link>
        </div>
        <p className="text-md text-gray-500">
          © 2025 <strong className="text-[#999999] transition-all duration-300 hover:text-green-400 hover:underline cursor-pointer mx-1">Nudge Ltd.</strong> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
