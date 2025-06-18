"use client";
import { motion } from "framer-motion";
import React from "react";

type ArcChartProps = {
  percent: number;
  color: string;
  label: string;
};

const ArcChart = ({ percent, color, label }: ArcChartProps) => {
  const radius = 80;
  const circumference = Math.PI * radius;
  const progress = (percent / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md h-full"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <svg
        width="100%"
        height="160"
        viewBox="0 0 200 120"
        className="mb-4"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="12"
        />
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>

      <span
        className="text-4xl md:text-5xl font-bold -mt-16 mb-4"
        style={{ color }}
      >
        {percent}%
      </span>

      <p className="text-sm md:text-base text-center text-gray-700 w-full max-w-xs">
        {label}
      </p>
    </motion.div>
  );
};

export default React.memo(ArcChart);
