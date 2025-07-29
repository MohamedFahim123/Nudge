"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMobile: boolean;
}

const Sidebar = ({ isOpen, setIsOpen, isMobile }: SidebarProps) => {
  const pathname = usePathname();

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <>
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 text-xl fixed top-4 right-4 z-50 text-white bg-black rounded-md"
        >
          <FaBars />
        </button>
      )}

      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "tween" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/dashboard/profile">Profile</Link>
                </li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {!isMobile && (
        <aside className="hidden lg:flex flex-col w-54 sticky top-0 h-screen bg-gray-100 border-r border-r-gray-200 shadow-xl z-30">
          <h2 className="text-lg font-bold mb-4 border-b-2 bg-[#250168] border-white py-4 px-4 flex justify-center">
            <Link href={"/summit"}>
              <Image
                width={100}
                height={100}
                src="/images/Nudge_Default_Light.avif"
                alt="Logo"
              />
            </Link>
          </h2>
          <ul className="space-y-3 text-xl mx-5 bg-gray-100">
            <li
              className={`px-4 py-2 cursor-pointer rounded-md ${
                pathname.includes("profile")
                  ? "bg-[#250168] text-white"
                  : "hover:bg-[#250168] cursor-pointer text-black hover:text-white transition-all ease-in-out duration-300"
              }`}
            >
              <Link href="/dashboard/profile" className={`block font-semibold`}>
                Profile
              </Link>
            </li>
            <li
              className={`px-4 py-2 rounded-md cursor-pointer ${
                pathname.includes("tickets")
                  ? "bg-[#250168] text-white"
                  : "hover:bg-[#250168] text-black hover:text-white transition-all ease-in-out duration-300"
              }`}
            >
              <Link href="/dashboard/tickets" className={`block font-semibold`}>
                Tickets
              </Link>
            </li>
            <li
              className={`px-4 py-2 rounded-md cursor-pointer ${
                pathname.includes("buy-ticket")
                  ? "bg-[#250168] text-white"
                  : "hover:bg-[#250168] text-black hover:text-white transition-all ease-in-out duration-300"
              }`}
            >
              <Link
                href="/dashboard/buy-ticket"
                className={`block font-semibold`}
              >
                Buy a Ticket
              </Link>
            </li>
            <li
              className={`px-4 py-2 rounded-md cursor-pointer ${
                pathname.includes("my-cart")
                  ? "bg-[#250168] text-white"
                  : "hover:bg-[#250168] text-black hover:text-white transition-all ease-in-out duration-300"
              }`}
            >
              <Link href="/dashboard/my-cart" className={`block font-semibold`}>
                My Cart
              </Link>
            </li>
            <li
              className={`px-4 py-2 rounded-md cursor-pointer ${
                pathname.includes("my-transactions")
                  ? "bg-[#250168] text-white"
                  : "hover:bg-[#250168] text-black hover:text-white transition-all ease-in-out duration-300"
              }`}
            >
              <Link
                href="/dashboard/my-transactions"
                className={`block font-semibold`}
              >
                My Transactions
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
