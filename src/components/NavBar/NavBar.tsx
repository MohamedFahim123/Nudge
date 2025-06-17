"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-[#1E1E1E] py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={100}
            height={100}
            src="/images/Nudge_Default_Light.avif"
            className="h-8"
            alt="Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/home"
                className={`block py-2 px-3 ${
                  pathname === "/home" ? "text-[#5bf286]" : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/summit"
                className={`block py-2 px-3 ${
                  pathname === "/summit" ? "text-[#5bf286]" : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Summit
              </Link>
            </li>
            <li>
              <Link
                href="/summit/agenda"
                className={`block py-2 px-3 ${
                  pathname === "/summit/agenda"
                    ? "text-[#5bf286]"
                    : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Summit Agenda
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`block py-2 px-3 ${
                  pathname === "/contact-us/" ? "text-[#5bf286]" : "text-white"
                } rounded-sm md:bg-transparent md:p-0`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
