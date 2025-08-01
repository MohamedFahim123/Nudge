"use client";

import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { useSettingsStore } from "@/store/settings";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const { settings, getSettings, settingsLoading } = useSettingsStore();

  const getAllWebsiteSettings = useCallback(() => {
    if (!settings?.logo && !settingsLoading) getSettings();
  }, [settings, settingsLoading, getSettings]);

  useEffect(() => {
    getAllWebsiteSettings();
  }, [getAllWebsiteSettings]);

  useEffect(() => {
    (async () => {
      const cookiesToken: string = await getTokenFromServerCookies();
      setToken(cookiesToken);
    })();
  }, []);

  if (settingsLoading) return null;

  return (
    <nav className="bg-[#250168] py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={100}
            height={100}
            src={"/images/Nudge_Default_Light.avif"}
            className="h-8"
            alt="Logo"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-[#231f20] focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-[#231f20] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/"
                className={`block py-2 px-3 ${
                  pathname === "/" || pathname === "/home"
                    ? "text-[#5bf286]"
                    : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Summit
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/agenda"
                className={`block py-2 px-3 ${
                  pathname === "/agenda" ? "text-[#5bf286]" : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Summit Agenda
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/contact-us"
                className={`block px-3 ${
                  pathname === "/contact-us" ? "text-[#5bf286]" : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Contact Us
              </Link>
            </li>
            {token ? (
              <li>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  href="/dashboard/profile"
                  className="text-white hover:text-[#5bf286] ease-in-out duration-300 transition-all flex justify-center items-center"
                >
                  <CgProfile size={28} />
                </Link>
              </li>
            ) : (
              <li className="block py-2">
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  href="/auth/login"
                  className="px-6 py-2 bg-[#5bf286] border border-[#5bf286] text-white font-semibold transition-all hover:bg-white hover:text-[#5bf286]"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
