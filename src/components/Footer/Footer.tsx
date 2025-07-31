import { useSettingsStore } from "@/store/settings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaTimes, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { settings } = useSettingsStore();

  return (
    <footer className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-14">
        <div className="md:col-span-9 flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/4">
            <Link href="/">
              <Image
                src={"/images/Nudge_Default_Light.avif"}
                alt="Nudge Logo"
                width={200}
                height={100}
                className="object-contain h-16 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full sm:w-3/4">
            <span className="text-xs font-semibold bg-[#231f20] px-2 py-1 rounded">
              ABOUT
            </span>
            <p className="text-md text-[#969696] mt-6 leading-relaxed">
              Nudge Ltd. is a Jordan-based consulting firm serving the MENA
              region, dedicated to helping corporations maximize revenue through
              its proprietary Nudge Framework. Grounded in science and backed by
              evidence, the framework integrates psychology, innovation, and
              strategy to drive revenue growth.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-xs w-fit font-semibold bg-[#231f20] px-2 py-1 rounded">
            CONTACT
          </span>
          <Link
            href={`mailto:${settings?.email}`}
            className="text-sm text-[#969696] hover:underline transition-all hover:text-green-400"
          >
            {settings?.email}
          </Link>
        </div>
      </div>

      <div className="border-t border-[#969696] flex flex-col items-center gap-4 pt-12">
        <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-2xl">
          <Link
            className="p-3 rounded-full text-[#969696] transition hover:text-green-300 border border-[#969696] hover:border-green-300"
            href={settings?.linkedin ? settings.linkedin : "/summit"}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="p-3 rounded-full text-[#969696] transition hover:text-green-300 border border-[#969696] hover:border-green-300"
            href={settings?.twitter ? settings.twitter : "/summit"}
            aria-label="X (Twitter)"
          >
            <FaTimes />
          </Link>
          <Link
            className="p-3 rounded-full text-[#969696] transition hover:text-green-300 border border-[#969696] hover:border-green-300"
            href={settings?.instagram ? settings.instagram : "/summit"}
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            className="p-3 rounded-full text-[#969696] transition hover:text-green-300 border border-[#969696] hover:border-green-300"
            href={settings?.youtube ? settings.youtube : "/summit"}
            aria-label="YouTube"
          >
            <FaYoutube />
          </Link>
        </div>

        <p className="text-sm text-gray-500 text-center px-4">
          © 2025
          <span className="mx-1 text-[#999999] hover:text-green-400 hover:underline transition cursor-pointer">
            {settings?.app_name}
          </span>
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
