"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SessionCard = ({
  session,
}: {
  session: {
    id: number;
    time: string;
    title: string;
    description: string;
    speaker?: string;
    icon?: React.ReactNode;
  };
}) => (
  <motion.div
    initial={{ opacity: 0, x: -100, scale: 0.95 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white rounded-xl shadow-md"
  >
    <div className="w-24 h-24 min-w-[6rem] flex items-center justify-center bg-[#250168] rounded-full overflow-hidden text-white">
      {session.icon ? (
        session.icon
      ) : session.speaker ? (
        <Image
          src={session.speaker}
          alt="Speaker"
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      ) : null}
    </div>

    <div className="text-center sm:text-left">
      <h4 className="font-semibold text-base text-black">{session.time}</h4>
      <h5 className="text-lg text-[#231f20] font-bold">{session.title}</h5>
      <p className="text-gray-600 text-sm mt-1">{session.description}</p>
    </div>
  </motion.div>
);

export default React.memo(SessionCard);
