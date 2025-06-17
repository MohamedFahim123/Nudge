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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md"
  >
    <div className="w-30 h-30 flex items-center justify-center bg-[#250168] rounded-md text-white">
      {session.icon
        ? session.icon
        : session.speaker && (
            <Image
              src={session.speaker}
              alt="Speaker"
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
    </div>
    <div>
      <h4 className="font-bold text-md text-black">{session.time}</h4>
      <h5 className="text-lg text-purple-800 font-semibold">{session.title}</h5>
      <p className="text-gray-600 text-sm mt-1 max-w-xl">
        {session.description}
      </p>
    </div>
  </motion.div>
);

export default React.memo(SessionCard);
