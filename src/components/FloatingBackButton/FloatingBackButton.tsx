"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function FloatingBackButton() {
  return (
    <motion.div
      className="fixed top-10 right-4 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        href="/home"
        className="flex items-center gap-2 bg-[#250168] hover:bg-white text-white hover:text-[#250168] duration-300 border border-[#250168] shadow-md rounded-full px-4 py-2 transition-all"
      >
        <FaArrowLeft size={14} />
        <span className="text-md">Home</span>
      </Link>
    </motion.div>
  );
}
